
<template>
  <div class="page-main main-bg">
         <div class="page-main-info page-padding">
             <img src="../../../images/userpic/user-01.jpeg">
             <div class="page-main-info-right">
                 <h1>皮卡丘</h1>
                 <span>pica@fillmail.com</span>
                   <a @click="userinfoClick" class="leftBtn"><i class="fa fa-angle-right"></i></a>
             </div>
         </div>
         <hr class="division">
         <div class="page-main-inner page-padding">
            <div class="main-inner-title">
                <h1>邮件提醒</h1>
            </div>
            <div class="main-inner-content">
                <ul>
                    <li>新邮件提醒<span class="list-pull-right"><i class="fa fa-toggle-on"></i></span></li>
                    <li>广告邮件不提醒<span class="list-pull-right"><i class="fa fa-toggle-off"></i></span></li>
                    <li>仅提醒重要联系人的邮件<span class="list-pull-right"><i class="fa fa-toggle-on"></i></span></li>
                </ul>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    name:'userinfo',
    methods:{
        userinfoClick(){
            this.$router.push({name:'usersetting'})
        }
    }
}
</script>

<style lang="scss">
  
</style>

