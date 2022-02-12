var TSOS;
(function (TSOS) {
    var ProcessManager = (function () {
        function ProcessManager(maxProcesses) {
            this.maxProcesses = maxProcesses;
        }
        ProcessManager.prototype.init = function () {
            this.processes = [null];
        };
        ProcessManager.prototype.load = function (program, priority) {
            var pcb = new TSOS.PCB(priority);
            if (this.processes.length <= this.maxProcesses) {
                this.processes[pcb.processId] = pcb;
            }
            else {
            }
            _MemoryManager.allocateMemory(pcb, program);
        };
        return ProcessManager;
    })();
    TSOS.ProcessManager = ProcessManager;
})(TSOS || (TSOS = {}));
