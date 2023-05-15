// system 模块即项目的系统配置模块
// 布局相关的状态数据都放在这里

export const useSystemStore = defineStore('system', () => {
    // 当前可切换布局
    const currentSwitchlayout = shallowRef(null)
    // 可切换布局
    const switchLayoutList = shallowRef([])
    
    // 初始化可以切换布局方法
    const initSwitchLayout = list => {
        if (list && list.length > 0) {
            switchLayoutList.value = [...list]
            if (!currentSwitchlayout.value) {
                currentSwitchlayout.value = switchLayoutList.value[0]
            }
        }
    }
    return {
        currentSwitchlayout, 
        switchLayoutList,
        initSwitchLayout
    }
})
