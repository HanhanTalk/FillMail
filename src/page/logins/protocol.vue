<template>
  <div class="page-warp animated fadeIn">
      <div class="page-content">
        <div class="page-content-title">
            <h1>FillMail用户协议</h1>
        </div>
        <div class="page-content-item">

        </div>  
      </div>
  </div>
</template>
<script type="text/ecmascript6">
export default {
  name:'protocol'
}
</script>
<style lang="scss" scoped>
    $font-big:40px;
    $font-middle:30px;
    .page-warp{
        background: #e1e1e1;
        box-sizing: border-box;
        padding: 50px;
    }
    .page-content{
        width: 100%;
        height:100%;
        background: rgba(250,250,250,1);
        box-shadow: 10px 10px 20px #727272;
        z-index:2;
        .page-content-title{
            width:280px;
            height:100px;
            background:#ffdd3a;
            position: relative;
            top:-30px;
            left:20px;
            text-align: center;
            line-height: 100px;
            font-size:$font-middle;
            color:#ffffff;
        }
        .page-content-title:after{
            content:'';
            width:0;
            height:0;
            border-right:30px solid transparent;
            border-left:30px solid #d8c670;
            border-top:30px solid transparent;
            border-bottom:30px solid transparent; 
            position: relative;
            left: 170px;
            top: -100px;
            z-index:-1;
        }
    }
</style>

