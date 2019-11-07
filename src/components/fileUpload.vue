<template>
  <section>
    <el-upload
      class="custom-el-upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :headers="uploadConfig"
      multiple
      :limit="limit"
      list-type="picture"
      :on-exceed="fileExceed"
      :before-upload="checkUploadFile"
      :on-preview="handlePreview"
      :on-success="fileUploadSuccess"
      :on-error="fileUploadError"
      :on-remove="fileRemove"
      :file-list="fileList"
      :disabled="fileUploadDisabled"
    >
      <el-button size="small" type="primary" :disabled="fileUploadDisabled">
        <i class="el-icon-upload el-icon--left"></i>点击上传
      </el-button>
      <div v-show="fileUploadDisabled" class="disabled-upload" @click.stop="()=>{}"></div>
      <div slot="tip" class="el-upload__tip">图片最多上传5张，每张不超过5M，仅支持{{supportFile.join('，')}}格式！</div>
    </el-upload>

    <!-- 图片预览 -->
    <!-- <div ref="previewImage" class="images" v-viewer="{movable: false}" v-show="false">
      <img style="width:50px;height:50px"
           v-for="(src, index) in previewImgList"
           :src="src"
           :key="index"
           v-show="index === 0"
      />
    </div>-->
  </section>
</template>

<script>
// import {fileUpload} from "@/api/common";

export default {
  model: { prop: "fileArray" },
  props: {
    fileArray: { type: Array, default: () => [] },
    index: { type: Number, default: () => null },
    limit: { type: Number, default: () => 3 }
  },
  data() {
    return {
      // 上传支持的文件格式
      supportFile: ["jpeg", "jpg", "png"],

      uploadConfig: {
        //上传token
        crm_signin: localStorage.getItem("token")
      },

      // 已上传的文件列表
      fileList: [],
      previewImgList: []
    };
  },

  computed: {
    fileUploadDisabled() {
      return this.fileList.length === this.limit;
    }
  },

  methods: {
    // 文件超出个数限制
    fileExceed() {
      this.$message.error(`图片最多可上传${this.limit}张`);
    },

    // 校验上传的文件
    checkUploadFile(file) {
      let { type, size } = file,
        isImage = this.supportFile.includes(type.split("/")[1]),
        isLt5M = size / 1024 / 1024 <= 5;

      if (!isImage) {
        this.$message.error("文件仅支持jpeg，jpg，png格式！");
        return isImage;
      }

      if (!isLt5M) {
        this.$message.error("文件大小不可超过5M！");
        return isLt5M;
      }

      return isImage && isLt5M;
    },

    handlePreview(file) {
      //点击文件列表中已上传的文件时的钩子
      // this.previewImgList = [];
      // this.previewImgList.push(file.url);
      // setTimeout(() => {
      //   const viewer = this.$refs.previewImage.$viewer;
      //   viewer.show();
      // }, 300);
    },

    // 文件上传成功
    fileUploadSuccess(res, file, fileList) {
      this.fileList = fileList;
      console.log(this.fileList);
    },

    // 文件上传失败
    fileUploadError(err, file, fileList) {
      this.$message.error(`图片${file.name}上传失败！`);
      this.fileList = fileList;
    },

    // 文件移除
    fileRemove(file, fileList) {
      this.fileList = fileList;
    }
  },
  mounted() {
    this.fileList = this.fileArray;
  },
  watch: {
    fileList(val) {
      this.$emit("input", this.fileList, this.index);
    },

    fileArray(val) {
      if (JSON.stringify(this.fileList) !== JSON.stringify(val))
        this.fileList = val;
    }
  }
};
</script>
