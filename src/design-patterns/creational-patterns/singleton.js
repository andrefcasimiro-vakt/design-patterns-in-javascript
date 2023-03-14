const Singleton = (function() {
    function ProcessManager() {
        this.numberOfProcesses = 0
    }

    let processManagerInstance

    function createProcessManager() {
        processManagerInstance = new ProcessManager()
        return processManagerInstance
    }

    return {
        getProcessManager: () => {
            if (!processManagerInstance) {
                processManagerInstance = createProcessManager()
            }

            return processManagerInstance
        }
    }
})()

const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()

console.log(processManager === processManager2)
