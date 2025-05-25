// 定义模块加载系统
function createModuleLoader(modules) {
    // 缓存对象，用于存储已经加载的模块
    const moduleCache = {};

    // 模块加载器函数：负责加载和执行模块
    function loadModule(moduleId) {
        // 如果模块已经被加载，直接返回其导出内容
        if (moduleCache[moduleId]) {
            return moduleCache[moduleId].exports;
        }

        // 创建一个新的模块对象并缓存它
        const module = {
            id: moduleId,
            loaded: false,
            exports: {}
        };
        moduleCache[moduleId] = module;

        // 执行模块定义函数，并传入三个参数：
        // 1. 当前模块对象
        // 2. 当前模块的导出对象
        // 3. 模块加载器函数本身（用于加载依赖）
        modules[moduleId].call(module.exports, module, module.exports, loadModule);

        // 标记模块为已加载
        module.loaded = true;

        // 返回模块的导出内容
        return module.exports;
    }

    // 设置入口模块 ID 和其他配置
    loadModule.m = modules; // 模块定义数组
    loadModule.c = moduleCache; // 模块缓存

    // 辅助方法：定义可枚举属性或 getter 方法到目标对象上
    loadModule.defineProperty = function(target, key, getter) {
        if (!Object.prototype.hasOwnProperty.call(target, key)) {
            Object.defineProperty(target, key, {
                enumerable: true,
                get: getter
            });
        }
    };

    // 辅助方法：标记一个对象为 ES 模块
    loadModule.markAsESModule = function(exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
        }
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
    };

    // 辅助方法：处理模块的类型转换
    loadModule.handleModuleType = function(module, flags) {
        let processedModule = module;

        // 根据标志位处理模块
        if (flags & 1) { // 如果设置了标志位 1，先加载模块
            processedModule = loadModule(module);
        }
        if (flags & 8) { // 如果设置了标志位 8，直接返回模块
            return processedModule;
        }
        if (flags & 4 && typeof processedModule === 'object' && processedModule && processedModule.__esModule) {
            // 如果设置了标志位 4 并且是 ES 模块，直接返回
            return processedModule;
        }

        // 创建新的对象来包装默认导出和其他导出
        const wrappedModule = Object.create(null);
        loadModule.markAsESModule(wrappedModule);

        // 添加默认导出
        Object.defineProperty(wrappedModule, 'default', {
            enumerable: true,
            value: processedModule
        });

        // 添加其他导出
        if (flags & 2 && typeof processedModule !== 'string') {
            for (const key in processedModule) {
                loadModule.defineProperty(wrappedModule, key, () => processedModule[key]);
            }
        }

        return wrappedModule;
    };

    // 辅助方法：处理 CommonJS 模块的默认导出
    loadModule.wrapCommonJSExport = function(module) {
        // 根据模块是否有 __esModule 属性，决定是返回 default 导出还是整个模块对象
        const exportFunction = module && module.__esModule ? 
            () => module.default : 
            () => module;

        // 确保可以访问 a 属性
        loadModule.defineProperty(exportFunction, 'a', exportFunction);

        return exportFunction;
    };

    // 辅助方法：检查对象是否拥有自身的属性
    loadModule.hasOwn = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    };

    // 设置公共路径，默认为空字符串
    loadModule.publicPath = '';

    // 加载并执行入口模块
    loadModule(loadModule.entry = 0);

    // 返回模块加载器函数，以便外部调用
    return loadModule;
}

// 使用示例：假设 modules 是一个包含所有模块定义的数组
createModuleLoader([]); // 这里传递实际的模块定义数组