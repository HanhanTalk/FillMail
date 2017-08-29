<template>
    <!-- <div class="progress-wapper">
        <div class="progress" class="progress-striped">
            <div class="progress-bar" role="progressbar">
            </div>
        </div>
    </div> -->
    <div class="progress-wapper">
        <div class="progress-bar" role="progressbar" :aria-valuemin="0" :aria-valuemax="max" :aria-valuenow="value" :style="{width:(percent<100? percent:100)+'%'}">
        </div>
    </div>
</template>

<script>
export default {
    name:'progressbar',
    props:{
        value:{
            type:Number,
            required:true
        },
        max:{
            type:Number,
            default:100
            },
        // animate:{
        //     type:Boolean,
        //     default:false
        // }
    },
    computed:{
        percent(){
            return parseInt(this.value * 100 / this.max ,10);
        }
    }
}
</script>

<style>
   .progress-wapper{
       height:8px;
       width:100%;
       position: absolute;
       top:168px;
       z-index:4;
   }
   .progress-bar{
       height:100%;
       position: absolute;
       left:0;
       background:linear-gradient(to right,rgb(83,83,179),rgb(64,176,198));
   }
</style>
