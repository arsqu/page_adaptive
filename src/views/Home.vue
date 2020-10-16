<template>
  <div class="lt_box">
    <Header />
    <div class="lt_container">
      <div class="lf_box">
        <div class="box_item">
          <div class="lt_i_txt">
            <span>CPU使用量排名</span>
          </div>
          <div class="lt_i_chart"></div>
          <div class="lt_i_ls">
            <ul>
              <li>
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>1.CPU已使用2682G</span>
              </li>
              <li class="active">
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>2.CPU已使用2682G</span>
              </li>
              <li>
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>3.CPU已使用2682G</span>
              </li>
              <li>
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>4.CPU已使用2682G</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="box_item">
          <div class="lt_i_txt">
            <span>内存使用量排名</span>
          </div>
          <div class="lt_i_chart"></div>
          <div class="lt_i_ls">
            <ul>
              <li>
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>1.CPU已使用2682G</span>
              </li>
              <li class="active">
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>2.CPU已使用2682G</span>
              </li>
              <li>
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>3.CPU已使用2682G</span>
              </li>
              <li>
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>4.CPU已使用2682G</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="box_item">
          <div class="lt_i_txt">
            <span>硬盘使用量排名</span>
          </div>
          <div class="lt_i_chart"></div>
          <div class="lt_i_ls">
            <ul>
              <li>
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>1.CPU已使用2682G</span>
              </li>
              <li class="active">
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>2.CPU已使用2682G</span>
              </li>
              <li>
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>3.CPU已使用2682G</span>
              </li>
              <li>
                <span class="icon icon_right">
                  <i class></i>
                </span>
                <span>4.CPU已使用2682G</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="cent_box">
        <div class="box_item">
          <div class="lt_i_txt">
            <span>拓扑图</span>
          </div>
          <div class="lt_i_chart" id="d1">
            <div class="container">
              <div class="dh_center">
                <div class="dh_box dh_top">
                  <span>Internet</span>
                  <div class="dh_round aRound"></div>
                </div>
                <div class="dh_box dh_btop">
                  <span>B</span>
                  <div class="dh_round bRound"></div>
                </div>
                <div class="dh_box dh_ctop">
                  <span>C</span>
                  <div class="dh_round cRound"></div>
                </div>
                <div class="dh_box dh_dtop">
                  <span>D</span>
                  <div class="dh_round c1Round"></div>
                </div>
                <div class="dh_box dh_etop">
                  <span>E</span>
                  <div class="dh_round c2Round"></div>
                </div>
                <div class="vert_link">
                  <div class="dh_light dh_d9"></div>
                </div>
                <div class="line_lf slash_line">
                  <div class="dh_light dh_d9a"></div>
                </div>
                <div class="vert_link vert_link1">
                  <div class="dh_light dh_d9"></div>
                </div>
                <div class="line_rt slash_line">
                  <div class="dh_light dh_d9b"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rt_box">
        <div class="box_item">
          <div class="lt_i_txt">
            <span>告警信息</span>
          </div>
          <div class="lt_i_chart">
            <div class="warn"></div>
          </div>
          <div class="lt_i_ls">
            <ul>
              <li>
                <span class="icon icon_warn">
                  <i class></i>
                </span>
                <span>告警信息第一条</span>
              </li>
              <li class="active">
                <span class="icon icon_warn">
                  <i class></i>
                </span>
                <span>告警信息第一条</span>
              </li>
              <li>
                <span class="icon icon_warn">
                  <i class></i>
                </span>
                <span>告警信息第一条</span>
              </li>
              <li>
                <span class="icon icon_warn">
                  <i class></i>
                </span>
                <span>告警信息第一条</span>
              </li>
              <li>
                <span class="icon icon_warn">
                  <i class></i>
                </span>
                <span>告警信息第一条</span>
              </li>
              <li>
                <span class="icon icon_warn">
                  <i class></i>
                </span>
                <span>告警信息第一条</span>
              </li>
              <li>
                <span class="icon icon_warn">
                  <i class></i>
                </span>
                <span>告警信息第一条</span>
              </li>
              <li>
                <span class="icon icon_warn">
                  <i class></i>
                </span>
                <span>告警信息第一条</span>
              </li>
              <li>
                <span class="icon icon_warn">
                  <i class></i>
                </span>
                <span>告警信息第一条</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "components/Header";
import { setRem } from "assets/js/rem";

export default {
  name: "Home",
  components: {
    Header
  },
  created() {},
  mounted() {
    setRem();
  }
};
</script>
