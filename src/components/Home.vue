<template>
    <div class="col-md-12">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h1 class="panel-title ">Trade or view Portfolio</h1>
                <span class="pull-right clickable"><i class="glyphicon glyphicon-chevron-up"></i></span>
            </div>
            <div class="panel-body">
                <h5>You may Save/Load your Data</h5>
                <h5>Click on "End Day" to begin a New Day</h5>
                <hr>
                <p class="founds">Your founds:<span class="badge badge-success">{{ funds | currency }}</span> </p>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    mounted() {
      jQuery(document).on('click', '.panel-heading span.clickable', function(e){
        var $this = $(this);
        if(!$this.hasClass('panel-collapsed')) {
          $this.parents('.panel').find('.panel-body').slideUp();
          $this.addClass('panel-collapsed');
          $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');

        } else {
          $this.parents('.panel').find('.panel-body').slideDown();
          $this.removeClass('panel-collapsed');
          $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');

        }
      })
    }

  }
</script>

<style scoped>
    .clickable{
        cursor: pointer;
    }

    .panel-heading span {
        margin-top: -20px;
        font-size: 15px;
    }
    .panel-title {
        font-weight: bold;
    }
    .founds {
        font-weight: bold;
        font-size: 15px;
    }
    .badge-success {
        margin-left: 10px;
        padding: 5px 10px;
        background: rgba(7,68,37,0.46);
    
    }
</style>