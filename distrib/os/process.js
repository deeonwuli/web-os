var TSOS;
(function (TSOS) {
    var Process = (function () {
        function Process(proc) {
            if (!this.validateProc(proc)) {
                this.processID = proc.processID;
                this.acc = proc.acc;
                this.XRegister = proc.XRegister;
                this.YRegister = proc.YRegister;
                this.ZFlag = proc.ZFlag;
                this.programCounter = proc.programCounter;
                this.processState = proc.processState;
                this.priority = proc.priority;
            }
            else {
            }
        } // End of constructor
        Process.prototype.validateProc = function (proc) {
            var pID = proc.hasOwnProperty('processID');
            var acc = proc.hasOwnProperty('acc');
            var x = proc.hasOwnProperty('XRegister');
            var y = proc.hasOwnProperty('YRegister');
            var z = proc.hasOwnProperty('ZFlag');
            var pc = proc.hasOwnProperty('programCounter');
            var ps = proc.hasOwnProperty('processState');
            var priority = proc.hasOwnProperty('priority');
            return (pID && acc && x && y && z && pc && ps && priority);
        };
        Process.prototype.tick = function () {
            // TODO Execute the command at location this.programCounter
        };
        return Process;
    })();
    TSOS.Process = Process; // End of Process class
})(TSOS || (TSOS = {})); // End of TSOS module
