import IconMaterialSymbolsCodeBlocksOutline from '~icons/material-symbols/code-blocks-outline'

export const menuRouter = [
    {
        path: 'devtools',
        name: 'DevTools',
        meta: {
            title: '开发工具',
            icon: markRaw(IconMaterialSymbolsCodeBlocksOutline)
        },
        redirect: {
            name: 'RegularPage'
        },
        children: [
            {
                path: 'regular',
                name: 'RegularPage',
                meta: {
                    title: '正则在线校验'
                },
                component: () => import('@/views/RegularPage.vue')
            }
        ]
    }
]

/* 
写个递归方法拼接一下每个菜单的完整路由，
并把每个路由菜单中的 meta 对象压平到菜单里，
方便我们后面使用，还是在 src/router 文件夹下的 menuRouter.js 文件，
新增一个 menuRouterFormat 方法处理菜单数据并将处理后的数据导出 
*/
// 菜单路由数组
export const menuRouterFormat = (router, parentPath) => {
    return router.map(item => {
        // 拼接路由，例：'devtools' -> '/devtools'  'regular' -> '/devtools/regular'
        item.path = parentPath ? `${parentPath}/${item.path}` : `/${item.path}`
        // 存在 children 属性，且 children 数组长度大于 0，开始递归
        if (item.children && item.children.length > 0) {
            item.children = menuRouterFormat(item.children, item.path)
        }
        return Object.assign({}, item, item.meta || {})
    })
}

export const menuRouterFormatList = menuRouterFormat([...menuRouter])