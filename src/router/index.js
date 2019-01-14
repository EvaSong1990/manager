import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/home'
import SoftwareVersion from '../components/views/software_version'
import UserFeedback from '../components/views/user_feedback'
import AirHelp from '../components/views/air_help'
import GroundHelp from '../components/views/ground_help'
import AlertModal from '../components/views/alert_modal'
import RunPage from '../components/views/run_page'
import AirCallPower from '../components/views/airCall_power'
import AirITSCTI from '../components/views/air_ITS_CTI'
import AirOrder from '../components/views/air_order'
import XieXiaoOrder from '../components/views/xiexiao_order'
import AirInsuranceOrder from '../components/views/air_insurance_order'
import AirDataManager from '../components/views/air_data_manager'
import AirCustomerInfo from '../components/views/air_customer_info'
import OneKeyRenewal from '../components/views/one_key_renewal'
import AreaManage from '../components/views/area_manage'
import BusinessArea from '../components/views/business_area'
import BusinessPart from '../components/views/business_part'
import TeamManage from '../components/views/team_manage'
import AirCallManage from '../components/views/airCall_manage'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: '',
      path: '/',
      component: Home,
      children: [
        { meta: { title: '应用软件版本管理' }, name: '', path: '/SoftwareVersion', component: SoftwareVersion },
        { meta: { title: '用户反馈信息查询' }, name: '', path: '/UserFeedback', component: UserFeedback },
        { meta: { title: '空中帮助信息管理' }, name: '', path: '/AirHelp', component: AirHelp },
        { meta: { title: '地面帮助信息管理' }, name: '', path: '/GroundHelp', component: GroundHelp },
        { meta: { title: '弹框管理' }, name: '', path: '/AlertModal', component: AlertModal },
        { meta: { title: '启动页管理' }, name: '', path: '/RunPage', component: RunPage },
        { meta: { title: '坐席外呼权限管理' }, name: '', path: '/AirCallPower', component: AirCallPower },
        { meta: { title: '坐席ITS端CTI登录号管理' }, name: '', path: '/AirITSCTI', component: AirITSCTI },
        { meta: { title: '坐席订单管理' }, name: '', path: '/AirOrder', component: AirOrder },
        { meta: { title: '协销非车订单查询' }, name: '', path: '/XieXiaoOrder', component: XieXiaoOrder },
        { meta: { title: '坐席车险订单查询' }, name: '', path: '/AirInsuranceOrder', component: AirInsuranceOrder },
        { meta: { title: '数据管理' }, name: '', path: '/AirDataManager', component: AirDataManager },
        { meta: { title: '坐席客户端信息查看' }, name: '', path: '/AirCustomerInfo', component: AirCustomerInfo },
        { meta: { title: '一键续保订单查询' }, name: '', path: '/OneKeyRenewal', component: OneKeyRenewal },
        { meta: { title: '区域管理' }, name: '', path: '/AreaManage', component: AreaManage },
        { meta: { title: '营业区管理' }, name: '', path: '/BusinessArea', component: BusinessArea },
        { meta: { title: '营业部管理' }, name: '', path: '/BusinessPart', component: BusinessPart },
        { meta: { title: '团队管理' }, name: '', path: '/TeamManage', component: TeamManage },
        { meta: { title: '坐席管理' }, name: '', path: '/AirCallManage', component: AirCallManage },
        { meta: { title: '用户反馈信息查询' }, name: '', path: '/*', component: SoftwareVersion }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export { router }
