/**
 * Created by artamonov on 27.11.15.
 */
var objHelper = new Helper();

var allPrograms = {
    clock: {
        src: 'img_for_exe/app-clock-icon.png',
        name: 'Clock',
        context: {
            numberThread: 2,
            sizeMemory: 1222,
            countTact: 7,
            modules: ["cabview.dll", "deskadp.dll", "deskmon.dll", "deskperf.dll", "diskcopy.dll", "docprop.dll", "dskquoui.dll", "icmui.dll", "msys.cpl", "ntlanui2.dll", "ntshrui.dll", "printui.dll", "rshx32.dll", "shscrap.dll", "slayerxp.dll", "syncui.dll"]
        }
    },
    pdfReader: {
        src: 'img_for_exe/app-pdf-icon.png',
        name: 'Pdr reader',
        context: {
            numberThread: 4,
            sizeMemory: 24,
            countTact: 3,
            modules: ["wiashext.dll", "pdfshell.dll", "msoshext.dll", "msonsext.dll", "wth159.dll", "oledb32.dll", "flcontextmenu.dll", "chrome.dll", "icudt.dll"]
        }
    },
    skype: {
        src: 'img_for_exe/apps-skype-icon.png',
        name: 'Skype',
        context: {
            numberThread: 16,
            sizeMemory: 111,
            countTact: 8,
            modules: ["hkvolkey.dll", "grooveex.dll", "mlshext.dll", "msohevi.dll", "olkfstub.dll", "onfilter.dll", "visshe.dll", "grooveintlresource.dll", "shellext.dll", "wabfind.dll", "syntpcpl.dll", "btkeyind.dll", "wzshlstb.dll"]
        }
    },
    chrome: {
        src: 'img_for_exe/chrome-icon.png',
        name: 'Chrome',
        context: {
            numberThread: 11,
            sizeMemory: 145,
            countTact: 4,
            modules: ["agentpsh.dll", "advapi32.dll", "apphelp.dll", "appwiz.cpl", "atl.dll", "browseui.dll", "btmmhook.dll", "btncopy.dll", "btneighborhood.dll", "clbcatq.dll", "comdlg32.dll", "comres.dll", "credui.dll", "crypt32.dll", "cryptdll.dll", "cryptext.dll", "cryptnet.dll"]
        }
    },
    codeBlock: {
        src: 'img_for_exe/code-block.png',
        name: 'Clock',
        context: {
            numberThread: 23,
            sizeMemory: 122,
            countTact: 4,
            modules: ["cryptui.dll", "cscdll.dll", "cscui.dll", "devenum.dll", "dfshim.dll", "dfsshlex.dll", "dnsapi.dll", "docprop2.dll", "dot3api.dll", "dot3dlg.dll", "dsquery.dll", "dsuiext.dll", "eappcfg.dll", "eappprxy.dll", "extmgr.dll", "gdi32.dll"]
        }
    },
    excel: {
        src: 'img_for_exe/excel-icon.png',
        name: 'Code block',
        context: {
            numberThread: 3,
            sizeMemory: 165,
            countTact: 7,
            modules: ["hnetcfg.dll", "hticons.dll", "icmui.dll", "ieframe.dll", "iertutil.dll", "imagehlp.dll", "imm32.dll", "iphlpapi.dll", "kernel32.dll", "linkinfo.dll", "midimap.dll", "mmcshext.dll", "msacm32.dll", "sacm32.drv", "msasn1.dll"]
        }
    },
    firefox: {
        src: 'img_for_exe/firefox-icon.png',
        name: 'Firefox',
        context: {
            numberThread: 12,
            sizeMemory: 200,
            countTact: 5,
            modules: ["mscms.dll", "msctf.dll", "msdmo.dll", "mshtml.dll", "msieftp.dll", "msls31.dll", "mstask.dll", "msvcp100.dll", "msvcp60.dll"]
        }
    },
    fontForge: {
        src: 'img_for_exe/fontforge-icon.png',
        name: 'FontForge',
        context: {
            numberThread: 3,
            sizeMemory: 44,
            countTact: 2,
            modules: ["msvcr100.dll", "msvcrt.dll", "mswsock.dll", "mydocs.dll", "netapi32.dll", "netplwiz.dll", "netshell.dll", "normaliz.dll"]

        }
    },
    kthesaurus: {
        src: 'img_for_exe/kthesaurus-icon.png',
        name: 'Kthesaurus',
        context: {
            numberThread: 6,
            sizeMemory: 38,
            countTact: 12,
            modules: ["ntdll.dll", "ntmarta.dll", "ntshrui.dll", "occache.dll", "ole32.dll", "oleacc.dll", "oleaut32.dll", "onex.dll", "photowiz.dll", "psapi.dll", "rasadhlp.dll", "rasapi32.dll", "rasman.dll", "remotepg.dll", "rpcrt4.dll"]
        }
    },
    photoshop: {
        src: 'img_for_exe/photoshop-Metro-icon.png',
        name: 'Photoshop',
        context: {
            numberThread: 22,
            sizeMemory: 64,
            countTact: 14,
            modules: ["rsaenh.dll", "rsvpsp.dll", "rtutils.dll", "samlib.dll", "secur32.dll", "sendmail.dll", "sensapi.dll", "setupapi.dll"]
        }
    },
    terminal: {
        src: 'img_for_exe/plugin-script-icon.png',
        name: 'Terminal',
        context: {
            numberThread: 1,
            sizeMemory: 52,
            countTact: 11,
            modules: ["shdocvw.dll", "shell32.dll", "shimgvw.dll", "shlwapi.dll", "shmedia.dll", "tapi32.dll", "themeui.dll", "twext.dll", "urlmon.dll", "user32.dll", "userenv.dll", "usp10.dll"]
        }
    },
    school: {
        src: 'img_for_exe/school-icon.png',
        name: 'School',
        context: {
            numberThread: 4,
            sizeMemory: 78,
            countTact: 12,
            modules: ["uxtheme.dll", "version.dll", "dmaud.drv", "webcheck.dll", "winhttp.dll", "wininet.dll", "winmm.dll", "inspool.drv", "winsta.dll"]
        }
    },
    viewerDocument: {
        src: 'img_for_exe/viewer-document-icon.png',
        name: 'Viewer document',
        context: {
            numberThread: 16,
            sizeMemory: 19,
            countTact: 8,
            modules: ["shell32.dll", "netshell.dll", "mmcndmgr.dll", "moricons.dll", "ieframe.dll", "compstui.dll", "xpsp2res.dll", "wmploc.dll", "comres.dll"]
        }
    },
    webBrowser: {
        src: 'img_for_exe/web-browser-icon.png',
        name: 'Web browser',
        context: {
            numberThread: 25,
            sizeMemory: 28,
            countTact: 2,
            modules: ["wintrust.dll", "wlanapi.dll", "wldap32.dll", "wmpshell.dll", "32.dll", "ws2help.dll", "wshext.dll", "wshtcpip.dll", "wtsapi32.dll", "uaucpl.cpl"]
        }
    },
    word: {
        src: 'img_for_exe/word-icon.png',
        name: 'Word',
        context: {
            numberThread: 27,
            sizeMemory: 129,
            countTact: 7,
            modules: ["wzcsapi.dll", "xpsp2res.dll", "xpsshhdr.dll", "zipfldr.dll", "atl90.dll", "msvcp90.dll", "msvcr90.dll", "comctl32.dll"]
        }
    }
};

Function.prototype.inheritsFrom = function (parentClassOrObject) {
    if (parentClassOrObject.constructor == Function) {
        //Normal Inheritance
        this.prototype = Object.create(parentClassOrObject.prototype);
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject.prototype;
    }
    else {
        //Pure Virtual Inheritance
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }
    return this;
};

var hardDisc = {
    // all space in MB
    allSpace: 512000,
    system: {
        name: 'System',
        size: 112000
    },
    media: {
        name: 'Media',
        size: 245760
    },
    getFreeSpace: function () {
        return (this.allSpace - this.system.size - this.media.size);
    }
};

window.addEventListener('load', function () {
    // add for all program context->virtual memory
    objHelper.addForProgramVirtualMemory();
    // add image for all program
    objHelper.addObjImageForAllProgram();
    var objVisual = new Visual();
    objVisual.init();
});

function Visual() {
    // style for pie
    var templateStyleForPie = {
        title: {
            text: ""
        },
        animationEnabled: true,
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        data: [
            {
                indexLabelFontSize: 20,
                indexLabelFontFamily: "Monospace",
                indexLabelFontColor: "darkgrey",
                indexLabelLineColor: "darkgrey",
                indexLabelPlacement: "outside",
                type: "pie",
                showInLegend: true,
                toolTipContent: "{y} (mb) {indexLabel} - <strong>#percent%</strong>"
                //dataPoints: genericDataPoints
            }
        ]
    };
    // array block options for - event - click
    var arrayBlockOptions;
    //counter for unique ID
    var idProcess = 1;
    // object Ram and Swap
    var objRam, objSwap;
    // object for animation arrayAllProcess
    var objAnimationTact;
    // object animation work program
    var objAnimationProgram;
    // array of all process
    var arrayAllProcess = [];
    arrayAllProcess.deleteProcess = function (process) {
        for (var incProcess = 0; incProcess < this.length; incProcess++) {
            if (this[incProcess].id === process.id) {
                // console.log('будет удален - > ' + incProcess);
                // console.log(this[incProcess]);
                // console.log(this);
                this.splice(incProcess, 1);
                return;
            }
        }
    };
    // timer
    var timerForProcess = 0;
    // active ico from bookmarks
    var activeIcoForShowContext;
    ///////////////////////////////////////////////////////////
    // class for Ram and Swap
    function Ram(allSpace) {
        this.allSpace = allSpace;
        this.process = [];
        this.busySpace = 0;
    }

    Ram.prototype.isFreeSpace = function (necessarySizeMemory) {
        if (this.allSpace > (this.busySpace + necessarySizeMemory)) {
            return true;
        } else {
            return false;
        }
    };
    Ram.prototype.redrawDiagram = function () {
        // check RAM OR SWAP
        if (this.constructor === Ram) {
            // redraw RAM
            arrayBlockOptions[1].click();
            //  console.log('redraw - RAM');
            //  console.log(this);

        } else if (this.constructor === Swap) {
            // redraw swap
            arrayBlockOptions[3].click();
            showSwapMemory();
            //  console.log('redraw - SWAP');
        }
    };
    Ram.prototype.setProcess = function (process) {
        var sizeProcess = process.context.sizeMemory;
        if (this.isFreeSpace(sizeProcess)) {
            this.process.push(process);
            this.busySpace += sizeProcess;
            // was add
            this.redrawDiagram();
            return true;
        } else {
            // was not add
            return false;
        }
    };
    Ram.prototype.deleteProcess = function (process) {
        var countProcess = this.process.length;
        for (var incProcess = 0; incProcess < countProcess; incProcess++) {
            if (this.process[incProcess].id === process.id) {
                // decrease busy space
                this.busySpace -= process.context.sizeMemory;
                this.process.splice(incProcess, 1);
                // was delete
                this.redrawDiagram();
                return true;
            }
        }
        // was not delete
        return false;
    };

    function Swap(allSpace) {
        Ram.apply(this, arguments);
    }

    Swap.inheritsFrom(Ram);

    //////////////////////////////////////////////////////////////
    // construct Visual
    this.init = function () {
        // show all programs icons
        addAllTagsPrograms();
        // add event listener for option block of dispatcher
        addEventListenerForDispatcherDevice();
        // show HDD menu - first
        showHddMemory();
        var generalOuterBlock = document.getElementById('system-dispatcher');
        arrayBlockOptions = generalOuterBlock.getElementsByClassName('option-device');
        // RAM - 8192 - size RAM memory
        objRam = new Ram(8192);
        //  console.log(objRam);
        // SWAP
        objSwap = new Swap(hardDisc.getFreeSpace());
        //  console.log(objSwap);
        // object for animation tact
        objAnimationTact = new DrawingTactAndWorkProgram();
        objAnimationTact.init();
        // object animation work of program
        objAnimationProgram = new AnimationWorkOfProgram();

    };

    function AnimationWorkOfProgram(){
        var codeBlock = document.getElementById('program-code');
        var elementNameProgram = document.getElementById('name-program-visual');
        var programName;
        var pointerToInterval;
        var strCode = ' <p class="code-string">mov     ah,19h</p>  <p class="code-string">int     21h</p>  <p class="code-string">mov     [curdrive],al</p>  <p class="code-string">mov     ax,40h</p>  <p class="code-string">mov     es,ax</p>  <p class="code-string">mov     bh,es:[10h]</p>  <p class="code-string">shr     bh,6</p>  <p class="code-string">inc     bh</p>  <p class="code-string">mov     bl,1</p>  <p class="code-string">mov     di,offset drives</p>  <p class="code-string">mov     ax,4409h</p>  <p class="code-string">int     21h</p>  <p class="code-string">jc      nextsetfloppy</p>  <p class="code-string">test    dh,10000000b</p>  <p class="code-string">jz      chkfloppy</p>  <p class="code-string">dec     bh</p>  <p class="code-string">mov     byte ptr [di+3],SUBST</p>  <p class="code-string">mov     byte ptr [di],DRIVEXISTS</p>  <p class="code-string">jmp     nextsetfloppy</p>  <p class="code-string">dec     bh</p>  <p class="code-string">js      nextsetfloppy</p>  <p class="code-string">mov     byte ptr [di+1],REMOVEDRV</p>  <p class="code-string">mov     byte ptr [di+3],FLOPPY</p>  <p class="code-string">jmp     setfloppyexist</p>  <p class="code-string">add     di,4</p>  <p class="code-string">inc     bl</p>  <p class="code-string">cmp     bl,2</p>  <p class="code-string">je      nextchkfloppy</p>  <p class="code-string">mov     ch,24</p>  <p class="code-string">mov     cl,3</p>  <p class="code-string">mov     ax,4409h</p>  <p class="code-string">mov     bl,cl</p>  <p class="code-string">int     21h</p>  <p class="code-string">jc      nextsetdrv</p>  <p class="code-string">mov     byte ptr [di],DRIVEXISTS</p>  <p class="code-string">mov     ax,4408h</p>  <p class="code-string">int     21h</p>  <p class="code-string">mov     byte ptr [di+1],al</p>  <p class="code-string">mov     bx,dx</p>  <p class="code-string">mov     dl,dh</p>  <p class="code-string">shr     dl,7</p>  <p class="code-string">and     dh,00010000b</p>  <p class="code-string">shr     dh,4</p>  <p class="code-string">mov     byte ptr [di+2],dh</p>  <p class="code-string">or      dl,dl</p>  <p class="code-string">jz      chkremote</p>  <p class="code-string">mov     byte ptr [di+3],SUBST</p>  <p class="code-string">jmp     nextsetdrv</p>  <p class="code-string">cmp     dh,REMOTEDRV</p>  <p class="code-string">je      chkcdrom</p>  <p class="code-string">test    bh,00000010b</p>  <p class="code-string">jz      drivenoshare</p>  <p class="code-string">mov     byte ptr [di+2],SHAREDRV</p>  <p class="code-string">test    bl,00000010b</p>  <p class="code-string">jnz     nextsetdrv</p>  <p class="code-string">mov     byte ptr [di+3],RAM</p>  <p class="code-string">jmp     nextsetdrv</p>  <p class="code-string">push    cx</p>  <p class="code-string">mov     ax,1500h</p>  <p class="code-string">xor     bx,bx</p>  <p class="code-string">int     2fh</p>  <p class="code-string">pop     cx</p>  <p class="code-string">or      bx,bx</p>  <p class="code-string">jz      nextsetdrv</p>  <p class="code-string">mov     ax,150bh</p>  <p class="code-string">dec     cl</p>  <p class="code-string">int     2fh</p>  <p class="code-string">inc     cl</p>  <p class="code-string">or      ax,ax</p>  <p class="code-string">jz      nextsetdrv</p>  <p class="code-string">mov     byte ptr [di+3],CDROM</p>  <p class="code-string">add     di,4</p>  <p class="code-string">inc     cl</p>  <p class="code-string">dec     ch</p>  <p class="code-string">jnz     drivechkloop</p>  <p class="code-string">mov     ah,0eh</p>  <p class="code-string">mov     dl,[curdrive]</p>  <p class="code-string">int     21h</p>  <p class="code-string">mov     cl,A</p>  <p class="code-string">mov     di,offset drives</p>  <p class="code-string">mov     ah,9</p>  <p class="code-string">cmp     byte ptr [di],DRIVEXISTS</p>  <p class="code-string">jne     nextdrvdump</p>  <p class="code-string">mov     al,cl</p>  <p class="code-string">int     29h</p>  <p class="code-string">xor     dh,dh</p>  <p class="code-string">mov     dl,byte ptr [di+1]</p>  <p class="code-string">shl     dx,4</p>  <p class="code-string">add     dx,offset removablemsg</p>  <p class="code-string">int     21h</p>  <p class="code-string">xor     dh,dh</p>  <p class="code-string">mov     dl,byte ptr [di+2]</p>  <p class="code-string">shl     dx,3</p>  <p class="code-string">add     dx,offset localmsg</p>  <p class="code-string">int     21h</p>  <p class="code-string">xor     dh,dh</p>  <p class="code-string">mov     dl,byte ptr [di+3]</p>  <p class="code-string">shl     dx,3</p>  <p class="code-string">add     dx,offset typemsg</p>  <p class="code-string">int     21h</p>  <p class="code-string">mov     dx,offset crlf</p>  <p class="code-string">int     21h</p>';


        this.initWorkProgram = function (countMs, nameProgram) {
            programName = nameProgram;
            elementNameProgram.innerHTML = nameProgram;
            codeBlock.innerHTML = strCode;
            clearInterval(pointerToInterval);
            pointerToInterval = setInterval(animationWorkProgram, 400);
            animationWorkProgram();
        };

        var animationWorkProgram = function () {
           // console.log(programName);
            if (codeBlock.firstElementChild){
                codeBlock.removeChild(codeBlock.firstElementChild);
            } else{
                codeBlock.innerHTML = strCode;
            }
        };

        this.endAnimation = function () {
            codeBlock.innerHTML = '';
            elementNameProgram.innerHTML = '';
           // console.log('stopppp');
            clearInterval(pointerToInterval);
        };
    }

    function DrawingTactAndWorkProgram() {
        var countTactCubes;
        var btnInterrupt;
        var arrayColorOfTactCubes;
        var arrayOfListNamePrograms;
        var countNameAndIcons;
        var arrayOfListIconPrograms;
        var pointerToInterval;
        var arrayColorString = [];
        var whiteColor = '#FFFFFF';
        var interruptTactColor = '#FF0000';

        this.init = function () {
            // create interrupt process
            var imgInterrupt = new Image();
            imgInterrupt.src = 'img_for_exe/interrupt.png';
            var objInterrupt = {
                id: -1,
                normName: 'INTERRUPT',
                objImage: imgInterrupt,
                tact: {
                    color: interruptTactColor,
                    counterTact: 4,
                    storageTact: 4
                }
            };

            // 20 cube in block for cube
            // 4 program on block for program
            btnInterrupt = document.getElementById('interrupt-button');
            var blockTactCube = document.getElementById('tact-cube');
            arrayColorOfTactCubes = blockTactCube.getElementsByClassName('one-tact-cube');
            countTactCubes = arrayColorOfTactCubes.length;
            // console.log(arrayColorOfTactCubes);
            var blockTactProgram = document.getElementById('tact-program');
            arrayOfListNamePrograms = blockTactProgram.getElementsByClassName('one-tact-name-program');
            arrayOfListIconPrograms = blockTactProgram.getElementsByClassName('one-tact-ico-program');
            countNameAndIcons = arrayOfListNamePrograms.length;
            // console.log(arrayOfListNamePrograms);
            //  console.log(arrayOfListIconPrograms);
            for (var incColor = 0; incColor < countTactCubes; incColor++) {
                arrayColorString[incColor] = whiteColor;
            }
            // add event listener for button 'interrupt'
            // click -> add new process (interrupt) after first process (currently running)
            btnInterrupt.addEventListener('click', function () {
                // "process" interrupt
                objInterrupt.tact.counterTact = objInterrupt.tact.storageTact = Math.floor(Math.random() * 4) + 1;
                if (arrayAllProcess.length > 1){
                    arrayAllProcess.splice(1, 0, objInterrupt);
                } else{
                    arrayAllProcess.splice(0, 0, objInterrupt);
                    objAnimationTact.initPlay();
                }

            });
        };

        this.initPlay = function () {
            //  console.log(arrayAllProcess);
            // when one program in array
            if (arrayAllProcess.length > 1) {
                return;
            }
            // when appeared process
            // run counter
            // first fill all tact blocks
            pointerToInterval = setInterval(runAnimation, 1000);
            runAnimation();
        };

        var runAnimation = function () {
            // console.log(arrayAllProcess);
            /*
             * самый простой алгоритм оказался самым удачным
             * выводи только то что есть - не более
             * */

            if (arrayAllProcess.length === 0){
                objAnimationTact.endPlay();
                return;
            }

            var firstProgramForAnimation = arrayAllProcess[0];
            // new process for animation work
            if (firstProgramForAnimation.tact.counterTact === firstProgramForAnimation.tact.storageTact && firstProgramForAnimation.normName !== 'INTERRUPT'){
                objAnimationProgram.endAnimation();
                objAnimationProgram.initWorkProgram(firstProgramForAnimation.tact.storageTact * 1000, firstProgramForAnimation.normName);
            }

             for (var incColor = 0; incColor < countTactCubes; incColor++) {
                arrayColorString[incColor] = '#FFFFFF';
            }

            var countProcess = arrayAllProcess.length;
            var countFillColor = 0;
            for (var incProcess = 0; (incProcess < countProcess && countFillColor < countTactCubes); incProcess++) {
                var process = arrayAllProcess[incProcess];
                for (var incColorByProcess = 0; (incColorByProcess < process.tact.counterTact && countFillColor < countTactCubes); incColorByProcess++, countFillColor++) {
                    arrayColorString[countFillColor] = process.tact.color;
                }
            }

            //output all color
            for (var incColor = 0; incColor < countTactCubes; incColor++) {
                arrayColorOfTactCubes[incColor].style.backgroundColor = arrayColorString[incColor];
            }

            var countProcess = arrayAllProcess.length;
            for (var incBlockNameAndIco = 0; incBlockNameAndIco < countNameAndIcons; incBlockNameAndIco++) {
                var elementNameProgram = arrayOfListNamePrograms[incBlockNameAndIco];
                var elementIcoProgram = arrayOfListIconPrograms[incBlockNameAndIco];
                var process = arrayAllProcess[incBlockNameAndIco];
                if (incBlockNameAndIco < countProcess) {
                    // output name and ico
                    elementNameProgram.innerHTML = '<strong class="tact-name">' + process.normName + '</strong>';
                    elementNameProgram.style.backgroundColor = process.tact.color;
                    if (elementIcoProgram.firstElementChild) {
                        elementIcoProgram.removeChild(elementIcoProgram.firstElementChild);
                    }
                    elementIcoProgram.appendChild(process.objImage.cloneNode(true));

                    if (process.normName !== 'INTERRUPT') {
                        elementIcoProgram.addEventListener('click', (function () {
                            var elementInBookmarks = process.elementInBookmarks;
                            return (
                                function () {
                                    elementInBookmarks.click();
                                }
                            );
                        })());
                    }

                } else {
                    elementNameProgram.innerHTML = '';
                    elementNameProgram.style.backgroundColor = whiteColor;
                    if (elementIcoProgram.firstElementChild) {
                        elementIcoProgram.removeChild(elementIcoProgram.firstElementChild);
                    }
                }
            }

            var firstProcess = arrayAllProcess[0];
            firstProcess.tact.counterTact -= 1;
            if (firstProcess.tact.counterTact < 1) {
                // if this element == interrupt -> delete
                if (firstProcess.normName === 'INTERRUPT') {
                    // delete this "process"
                    arrayAllProcess.splice(0, 1);
                } else {
                    // if this process != interrupt
                    // first element move to end of array
                    firstProcess.tact.counterTact = firstProcess.tact.storageTact;
                    arrayAllProcess.push(arrayAllProcess.shift());
                }
            }
        };

        this.endPlay = function () {
            clearInterval(pointerToInterval);
            for (var incTactBlock = 0; incTactBlock < countTactCubes; incTactBlock++) {
                arrayColorOfTactCubes[incTactBlock].style.backgroundColor = whiteColor;
            }
            for (var incBlockNameAndIco = 0; incBlockNameAndIco < countNameAndIcons; incBlockNameAndIco++) {
                arrayOfListNamePrograms[incBlockNameAndIco].innerHTML = '';
                arrayOfListNamePrograms[incBlockNameAndIco].style.backgroundColor = whiteColor;
                arrayOfListIconPrograms[incBlockNameAndIco].innerHTML = '';
            }
        };
    }

    // show all program icons
    var addAllTagsPrograms = function () {
        // pattern input element - ico of program
        var elementProgram = document.createElement('input');
        elementProgram.className = 'exe-icons';
        elementProgram.setAttribute('type', 'image');
        // block with all programs
        var blockIco = document.getElementById('list-exe');
        // add all programs
        for (var program in allPrograms) {
            if (allPrograms.hasOwnProperty(program)) {
                var icoOfProgram = elementProgram.cloneNode(true);
                var src = allPrograms[program].src;
                icoOfProgram.setAttribute('src', src);
                icoOfProgram.setAttribute('data-name-program', program);
                icoOfProgram.addEventListener('click', runProgram);
                blockIco.appendChild(icoOfProgram);
            }
        }
    };

    // click by ico in program block
    function runProgram(event) {
        // this live element from bookmarks
        var targetElement = event.target.cloneNode(true);
        // add event listener
        var nameProgram = targetElement.getAttribute('data-name-program');
        // create process
        var process = {
            id: idProcess++,
            name: nameProgram,
            normName: allPrograms[nameProgram].name,
            context: allPrograms[nameProgram].context,
            objImage: allPrograms[nameProgram].objImage,
            // element for delete
            elementInBookmarks: targetElement
        };
        // put to bookmarks
        putToBookmarksBlock(process);
        // put to array of process
        putProcessToRamOrSwap(process);
        // init play animation for tact of process
        objAnimationTact.initPlay();
    }

    // put program ico in bookmarks
    function putToBookmarksBlock(process) {
        // get elementInBookmarks
        var elementInBookmarks = process.elementInBookmarks;
        // add event listener
        elementInBookmarks.addEventListener('click', function () {
            showContext(process);
        });
        // change class
        elementInBookmarks.className = 'exe-icon-in-bookmark';
        // get bookmarks of context
        var bookmarkElement = document.getElementById('bookmarks-of-context');
        bookmarkElement.appendChild(elementInBookmarks);
        // immediately show context
        elementInBookmarks.click();
    }

    // put process to ram or swap
    function putProcessToRamOrSwap(process) {
        // put to RAM
        if (!objRam.setProcess(process)) {
            // put to SWAP
            if (!objSwap.setProcess(process)) {
                //console.log('Нет места для программ');
                return;
            }
        }
        // add to common array
        // create storage variable for countTact
        process.tact = {
            counterTact: process.context.countTact,
            storageTact: process.context.countTact,
            color: objHelper.getRandomColor()
        };
        arrayAllProcess.push(process);
        //console.log('after - add new property');
        //console.log(process);
        //console.log(objRam);
        //console.log(objSwap);
    }

    // click by 'STOP process'
    function stopProcess(process) {
        // console.log('process for stop -> ');
        // console.log(process);
        // make action next ico in bookmarks
        var elementIco = process.elementInBookmarks;
        // check next sibling
        if (elementIco.nextElementSibling) {
            var nextProgram = elementIco.nextElementSibling;
            // console.log('next programm ->');
            // console.log(nextProgram);
            nextProgram.click();
        } else if (elementIco.previousElementSibling) {
            var nextProgram = elementIco.previousElementSibling;
            nextProgram.click();
        } else {
            // no program
            objAnimationTact.endPlay();
            cleanBlockTextContext();
            // end last animation process in ASM
            objAnimationProgram.endAnimation();
        }
        elementIco.parentNode.removeChild(elementIco);

        //delete from arrayProcess
        deleteProcessFromRawOrSwap(process);
    }

    // delete process from ram or swap
    function deleteProcessFromRawOrSwap(process) {
        if (!objRam.deleteProcess(process)) {
            if (!objSwap.deleteProcess(process)) {
                console.log('Неоткуда удлять процесс');
            }
        }
        // delete from common array
        arrayAllProcess.deleteProcess(process);
        //  console.log(objRam);
        //  console.log(objSwap);
    }

    // make for active ico - opacity == 1
    function makeActiveIcoFromBookmarks(elementInBookmarks) {
        // disable previous ico
        if (activeIcoForShowContext) {
            activeIcoForShowContext.style.opacity = 0.3;
        }
        elementInBookmarks.style.opacity = 1;
        activeIcoForShowContext = elementInBookmarks;
    }

    // remove all children from text block
    function cleanBlockTextContext() {
        var blockTextContext = document.getElementById('text-context');
        // to clean block blockTextContext
        while (blockTextContext.firstElementChild) {
            blockTextContext.removeChild(blockTextContext.firstElementChild);
        }
    }

    // show full context about process
    function showContext(process) {
        // make opacity == 1
        // console.log(process);
        // console.log('show above');
        makeActiveIcoFromBookmarks(process.elementInBookmarks);
        var contextProgram = process.context;
        var blockTextContext = document.getElementById('text-context');
        // to clean block blockTextContext
        cleanBlockTextContext();
        ///////////////////////////////////////////////////////////
        // button - stop process
        var buttonStopProcess = document.createElement('p');
        buttonStopProcess.innerHTML = 'Остановить процесс';
        buttonStopProcess.className = 'stop-process';
        buttonStopProcess.addEventListener('click', function () {
            stopProcess(process);
        });
        ///////////////////////////////////////////////////////
        // count thread and memory
        var countThreadElement = document.createElement('p');
        countThreadElement.className = 'count-tread-memory';
        countThreadElement.innerHTML = 'Количество потоков: ' + contextProgram.numberThread;
        var sizeMemoryElement = document.createElement('p');
        sizeMemoryElement.className = 'count-tread-memory';
        sizeMemoryElement.innerHTML = 'Занимает памяти: ' + contextProgram.sizeMemory + ' (Mb), ' + contextProgram.countTact + ' такта(ов)';
        ////////////////////////////////////////////////////////
        // show block - modules
        // block modules + TITLE
        var outerBlockModuleAndHidden = document.createElement('div');
        outerBlockModuleAndHidden.className = 'module-and-title-block';
        // list modules title
        var blockTitleListOfModules = document.createElement('div');
        blockTitleListOfModules.className = 'title-list-modules';
        blockTitleListOfModules.innerHTML = 'Подключенные модули';
        // block modules
        var blockModules = document.createElement('div');
        blockModules.className = 'module-with-list';
        blockModules.style.display = 'block';
        // create list all modules
        var generalTagListModules = document.createElement('ul');
        generalTagListModules.id = 'ul-modules';
        var arrayModules = contextProgram.modules;
        var countModules = arrayModules.length;
        for (var incModule = 0; incModule < countModules; incModule++) {
            var elementLi = document.createElement('li');
            elementLi.className = 'one-module';
            elementLi.innerHTML = arrayModules[incModule];
            generalTagListModules.appendChild(elementLi);
        }
        blockModules.appendChild(generalTagListModules);
        // add block module and hidden-block to outerBlockModuleAndHidden
        outerBlockModuleAndHidden.appendChild(blockTitleListOfModules);
        outerBlockModuleAndHidden.appendChild(blockModules);
        blockTextContext.appendChild(buttonStopProcess);
        blockTextContext.appendChild(countThreadElement);
        blockTextContext.appendChild(sizeMemoryElement);
        blockTextContext.appendChild(outerBlockModuleAndHidden);
        ////////////////////////////////////////////////////////////////////
        // show block virtual memory
        // description column info about virtual memory
        var descriptionColumn = ['Баз. адрес', "Тип", "Состояние", "Защита"];
        // full block
        var blockVirtualMemory = document.createElement('div');
        blockVirtualMemory.className = 'block-virtual-memory';
        // full table
        var tableVirtualMemory = document.createElement('table');
        tableVirtualMemory.className = 'table-virtual-memory';
        var countColumn = descriptionColumn.length;
        // add headers
        var headerRow = document.createElement('tr');
        for (var incNameColumn = 0; incNameColumn < countColumn; incNameColumn++) {
            var column = document.createElement('th');
            column.innerHTML = descriptionColumn[incNameColumn];
            headerRow.appendChild(column)
        }
        // append header
        tableVirtualMemory.appendChild(headerRow);
        // add other rows
        var arrayRows = contextProgram.virtualMemory;
        var countRows = arrayRows.length;
        for (var incRow = 0; incRow < countRows; incRow++) {
            var elementRow = document.createElement('tr');
            for (var incColumn = 0; incColumn < countColumn; incColumn++) {
                var elementCell = document.createElement('td');
                elementCell.innerHTML = arrayRows[incRow][incColumn];
                elementRow.appendChild(elementCell);
            }
            tableVirtualMemory.appendChild(elementRow);
        }
        blockVirtualMemory.appendChild(tableVirtualMemory);
        blockTextContext.appendChild(blockVirtualMemory);
        blockModules.style.height = blockModules.offsetHeight + 'px';
    }

    // add event listener for dispatcher device
    var addEventListenerForDispatcherDevice = function () {
        var generalOuterBlock = document.getElementById('system-dispatcher');
        var arrayBlockOptions = generalOuterBlock.getElementsByClassName('option-device');
        var arrayBlockForDiagram = generalOuterBlock.getElementsByClassName('outer-block-for-canvas');
        // array function for show
        var arrayFunctionForOptions = [showHddMemory, showRamMemory, showProcessLive, showSwapMemory];
        // countOptions === countBlocks
        var countOptions = arrayBlockOptions.length;
        // add event listener
        for (var incOption = 0; incOption < countOptions; incOption++) {
            arrayBlockOptions[incOption].addEventListener('click',
                (function () {
                    var numberOption = incOption;
                    return (function () {
                        //  console.log('click ->' + numberOption);
                        for (var incBlockForDiagram = 0; incBlockForDiagram < countOptions; incBlockForDiagram++) {
                            arrayBlockForDiagram[incBlockForDiagram].style.display = 'none';
                            arrayBlockOptions[incBlockForDiagram].style.backgroundColor = 'burlywood';
                        }
                        arrayBlockForDiagram[numberOption].style.display = 'block';
                        arrayBlockOptions[numberOption].style.backgroundColor = 'green';
                        arrayFunctionForOptions[numberOption]();
                    })
                })()
            );
        }
    };

    // get value about process for diagram
    function getGenericDataPoints(objMemory) {
        var listProcess = objMemory.process;
        var genericDataPoints = [];
        var countRunProcess = listProcess.length;
        for (var incProcess = 0; incProcess < countRunProcess; incProcess++) {
            var process = listProcess[incProcess];
            var sizeProcess = process.context.sizeMemory;
            var infoForDiagram = {
                y: sizeProcess,
                legendText: process.normName,
                indexLabel: process.normName
            };
            genericDataPoints.push(infoForDiagram);
        }
        // add slice for free
        var sliceForFree = {
            y: (objMemory.allSpace - objMemory.busySpace),
            legendText: 'Free',
            indexLabel: 'Free'
        };
        genericDataPoints.push(sliceForFree);
        return genericDataPoints;
    }

    // show memory of HDD
    var showHddMemory = function () {
        var style = JSON.parse(JSON.stringify(templateStyleForPie));
        style.title.text = 'Занятость жесткого диска';
        style.data[0].dataPoints = [
            {y: hardDisc.media.size, legendText: hardDisc.media.name, indexLabel: hardDisc.media.name},
            {
                y: hardDisc.system.size,
                legendText: hardDisc.system.name,
                indexLabel: hardDisc.system.name
            },
            {
                y: (hardDisc.allSpace - (hardDisc.media.size + hardDisc.system.size)),
                legendText: "Free space",
                exploded: true,
                indexLabel: "Free space"
            }
        ];
        style.data[0].toolTipContent = "{y} (mb) - <strong>#percent%</strong>";
        var chartHdd = new CanvasJS.Chart(
            // container ID
            'diagram-physic-memory',
            style
        );
        chartHdd.render();
    };

    // show RAM memory
    var showRamMemory = function () {
        var genericDataPoints = getGenericDataPoints(objRam);
        var style = JSON.parse(JSON.stringify(templateStyleForPie));
        style.title.text = 'Занятость RAM памяти';
        style.data[0].dataPoints = genericDataPoints;
        var chartRam = new CanvasJS.Chart(
            // container ID
            'diagram-ram-memory',
            style
        );
        chartRam.render();
    };

    // show process live
    var showProcessLive = function () {
        var dps = [];   //dataPoints.
        var chart = new CanvasJS.Chart("diagram-processor-memory", {
            title: {
                text: "Загруженность процессора"
            },
            axisX: {
                title: "Время (sec)"
            },
            axisY: {
                title: "Загруженность (%)"
            },
            data: [{
                type: "line",
                dataPoints: dps
            }]
        });
        chart.render();
        // var timerForProcess = dps.length + 1;
        //var yVal = 15;
        var updateInterval = 1000;

        var updateChart = function () {
            if (objSwap.process.length > 0 || objRam.process.length > 0) {
                // run process
                var yVal = 10 + Math.round(Math.random() * 90);
            } else {
                var yVal = 0;
            }
            timerForProcess++;
            // add new POINTS
            dps.push({x: timerForProcess, y: yVal});
            if (dps.length > 10) {
                // remove point fro forward
                dps.shift();
            }
            chart.render();
            // update chart after specified time.
        };
        setInterval(function () {
            updateChart()
        }, updateInterval);
    }

    // show SWAP memory
    var showSwapMemory = function () {
        var genericDataPoints = getGenericDataPoints(objSwap);
        var style = JSON.parse(JSON.stringify(templateStyleForPie));
        style.title.text = 'Занятость SWAP памяти';
        style.data[0].dataPoints = genericDataPoints;
        var chartSwap = new CanvasJS.Chart(
            // container ID
            'diagram-swap-memory',
            style
        );
        chartSwap.render();
    };
}

// object for generic unique virtual memory
function Helper() {

    // get random index value
    function getRandIndex(array) {
        var randIndex = Math.floor(Math.random() * array.length);
        return randIndex;
    }

    // add generic virtual memory to program
    this.addForProgramVirtualMemory = function () {
        /*// description column info about virtual memory
         var descriptionColumn = ['Баз. адрес', "Тип", "Состояние", "Защита"];*/
        for (var program in allPrograms) {
            if (allPrograms.hasOwnProperty(program)) {
                allPrograms[program].context.virtualMemory = generateRowsVirtualPage();
            }
        }
    };

    // generic unique row for virtual memory
    function generateRowsVirtualPage() {
        // define variants
        var types = ['mapped', 'private'];
        var status = ['free', 'commit', 'reserved'];
        var attrProtection = ['readonly', 'readwrite', 'writecopy', 'execute', 'execute read', 'execute write', 'noaccess'];
        var arrayAllPages = [];
        for (var baseAddress = 4096; baseAddress <= 409600; baseAddress += 4096) {
            var pageInfo = [];
            pageInfo[0] = decToHex(baseAddress);
            pageInfo[1] = types[getRandIndex(types)];
            pageInfo[2] = status[getRandIndex(status)];
            pageInfo[3] = attrProtection[getRandIndex(attrProtection)];
            arrayAllPages.push(pageInfo);
        }
        return arrayAllPages;
    }

    // convert dec to hex (8 symbol begin with 0x)
    function decToHex(decNumber) {
        var strNulls = '00000000';
        var hexNumber = decNumber.toString(16);
        hexNumber = '0x' + strNulls.slice(0, (8 - hexNumber.length)) + hexNumber;
        return hexNumber
    }

    // add for all program object Image()
    this.addObjImageForAllProgram = function () {
        for (var nameProgram in allPrograms) {
            var objProgram = allPrograms[nameProgram];
            var objImage = new Image();
            objImage.src = objProgram.src;
            objProgram.objImage = objImage;
        }
    }

    // generate random color
    this.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}



