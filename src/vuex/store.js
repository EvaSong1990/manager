import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  menuDatas: [
    { label: '应用软件版本管理', idx: 'SoftwareVersion' },
    { label: '用户反馈信息查询', idx: 'UserFeedback' },
    { label: '空中帮助信息管理', idx: 'AirHelp' },
    { label: '地面帮助信息管理', idx: 'GroundHelp' },
    { label: '弹框管理', idx: 'AlertModal' },
    { label: '启动页管理', idx: 'RunPage' },
    {
      label: '空中坐席管理',
      idx: '7',
      children: [{
        label: '组织架构管理',
        idx: '7-1',
        children: [
          { label: '区域管理', idx: 'AreaManage' },
          { label: '营业区管理', idx: 'BusinessArea' },
          { label: '营业部管理', idx: 'BusinessPart' },
          { label: '团队管理', idx: 'TeamManage' },
          { label: '坐席管理', idx: 'AirCallManage' }
        ]
      },
      { label: '坐席外呼权限管理', idx: 'AirCallPower' },
      { label: '坐席ITS端CTI登录号管理', idx: 'AirITSCTI' },
      {
        label: '坐席活跃度报表',
        idx: '7-4',
        children: [
          { label: '活跃度查询', idx: '7-4-1' },
          { label: '登录明细查询', idx: '7-4-2' },
          { label: '业务数据汇总', idx: '7-4-3' },
          { label: '投保单明细查询', idx: '7-4-4' },
          { label: '投保单汇总查询', idx: '7-4-5' },
          { label: '消息查询', idx: '7-4-6' },
          { label: '意财险数据查询', idx: '7-4-7' },
          { label: '健康险数据查询', idx: '7-4-8' }
        ]
      },
      {
        label: '快捷回复管理',
        idx: '7-5',
        children: [
          { label: '快捷回复模板消息管理', idx: '7-5-1' },
          { label: '快捷回复模板类型管理', idx: '7-5-2' },
          { label: '图文消息模板管理', idx: '7-5-3' }
        ]
      },
      {
        label: '坐席数据检视报表',
        idx: '7-6',
        children: [
          { label: '年度总结数据', idx: '7-6-1' },
          { label: '数据检视周报表', idx: '7-6-2' },
          { label: '数据检视日报表', idx: '7-6-3' },
          { label: '行为分析报表', idx: '7-6-4' },
          { label: '好车主迁徙数据检视', idx: '7-6-5' },
          { label: '外呼信息', idx: '7-6-6' }
        ]
      },
      {
        label: '坐席活动管理',
        idx: '7-7',
        children: [
          { label: '流量券', idx: '7-7-1' },
          { label: 'Banner管理(空中坐席)', idx: '7-7-2' },
          { label: '话费券', idx: '7-7-3' },
          { label: '京东券', idx: '7-7-4' },
          { label: '中奖信息', idx: '7-7-5' },
          { label: '领取话费券信息', idx: '7-7-6' },
          { label: '抽奖信息汇总', idx: '7-7-7' },
          { label: '积分来源信息', idx: '7-7-8' },
          { label: '积分信息汇总', idx: '7-7-9' },
          { label: '获取积分明细', idx: '7-7-10' },
          { label: '使用积分明细', idx: '7-7-11' }
        ]
      },
      { label: '坐席订单管理', idx: 'AirOrder' },
      { label: '协销非车订单查询', idx: 'XieXiaoOrder' },
      { label: '坐席车险订单查询', idx: 'AirInsuranceOrder' },
      { label: '数据管理', idx: 'AirDataManager' },
      { label: '坐席客户端信息查看', idx: 'AirCustomerInfo' },
      { label: '一键续保订单查询', idx: 'OneKeyRenewal' }
      ]
    },
    {
      label: '地面业务员管理',
      idx: '8',
      children: [
        { label: '业务员信息管理', idx: '8-1' },
        { label: '续保管理人员信息', idx: '8-2' },
        { label: '转新名单跟踪权限配置', idx: '8-3' },
        { label: '困难件分配查询', idx: '8-4' },
        { label: '业务员订单管理', idx: '8-5' },
        { label: '困难件跟踪数据提取', idx: '8-6' },
        { label: '飞车产品配置', idx: '8-7' },
        {
          label: '业务员活动管理',
          idx: '8-8',
          children: [
            { label: '流量券', idx: '8-8-1' },
            { label: 'Banner管理(地面业务员)', idx: '8-8-2' },
            { label: '话费券', idx: '8-8-3' },
            { label: '中奖信息', idx: '8-8-4' },
            { label: '领取话费券信息', idx: '8-8-5' },
            { label: '抽奖信息汇总', idx: '8-8-6' }
          ]
        },
        { label: '营销软文管理', idx: '8-9' },
        { label: '专家信息管理', idx: '8-10' },
        {
          label: '业务员数据检视报表',
          idx: '8-11',
          children: [{
            label: '续报名单跟踪数据提取',
            idx: '8-11-1'
          }]
        },
        { label: '拜访签到管理', idx: '8-12' },
        { label: '业务员客户端信息查看', idx: '8-13' },
        { label: '车商网点信息', idx: '8-14' },
        { label: '业务员外呼权限管理', idx: '8-15' },
        { label: '新渠道困难件外呼权限管理', idx: '8-16' },
        { label: '外呼WX管理', idx: '8-17' },
        { label: '飞车订单数据提取', idx: '8-18' },
        { label: '客户端信息回补管理', idx: '8-19' },
        { label: 'IMCS订单管理', idx: '8-20' }
      ]
    },
    {
      label: '任务管理',
      idx: '9',
      children: [{
        label: '问卷管理',
        idx: '9-1',
        children: [
          { label: '问卷管理', idx: '9-1-1' },
          { label: '问卷数据', idx: '9-1-2' }
        ]
      }]
    }
  ]
}
// state中的共享值是实时更新的，mutations强制使用同步去修改state中的值
// mutations只用于修改state中值
const mutations = {

}
const getters = {

}
const actions = {

}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
