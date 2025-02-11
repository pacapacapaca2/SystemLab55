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
        name: 'CodeBlock',
        context: {
            numberThread: 23,
            sizeMemory: 122,
            countTact: 4,
            modules: ["cryptui.dll", "cscdll.dll", "cscui.dll", "devenum.dll", "dfshim.dll", "dfsshlex.dll", "dnsapi.dll", "docprop2.dll", "dot3api.dll", "dot3dlg.dll", "dsquery.dll", "dsuiext.dll", "eappcfg.dll", "eappprxy.dll", "extmgr.dll", "gdi32.dll"]
        }
    },
    excel: {
        src: 'img_for_exe/excel-icon.png',
        name: 'Excel',
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
    objHelper.addForProgramVirtualMemory();
    objHelper.addObjImageForAllProgram();
    var objVisual = new Visual();
    objVisual.init();
});

function Visual() {
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
            }
        ]
    };
    var arrayBlockOptions;
    var idProcess = 1;
    var objRam, objSwap;
    var objAnimationTact;
    var objAnimationProgram;
    var arrayAllProcess = [];
    arrayAllProcess.deleteProcess = function (process) {
        for (var incProcess = 0; incProcess < this.length; incProcess++) {
            if (this[incProcess].id === process.id) {
                this.splice(incProcess, 1);
                return;
            }
        }
    };
    var timerForProcess = 0;
    var activeIcoForShowContext;
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
        if (this.constructor === Ram) {
            arrayBlockOptions[1].click();
        } else if (this.constructor === Swap) {
            arrayBlockOptions[3].click();
            showSwapMemory();
        }
    };
    Ram.prototype.setProcess = function (process) {
        var sizeProcess = process.context.sizeMemory;
        if (this.isFreeSpace(sizeProcess)) {
            this.process.push(process);
            this.busySpace += sizeProcess;
            this.redrawDiagram();
            return true;
        } else {
            return false;
        }
    };
    Ram.prototype.deleteProcess = function (process) {
        var countProcess = this.process.length;
        for (var incProcess = 0; incProcess < countProcess; incProcess++) {
            if (this.process[incProcess].id === process.id) {
                this.busySpace -= process.context.sizeMemory;
                this.process.splice(incProcess, 1);
                this.redrawDiagram();
                return true;
            }
        }
        return false;
    };

    function Swap(allSpace) {
        Ram.apply(this, arguments);
    }

    Swap.inheritsFrom(Ram);

    this.init = function () {
        addAllTagsPrograms();
        addEventListenerForDispatcherDevice();
        showHddMemory();
        var generalOuterBlock = document.getElementById('system-dispatcher');
        arrayBlockOptions = generalOuterBlock.getElementsByClassName('option-device');
        objRam = new Ram(8192);
        objSwap = new Swap(hardDisc.getFreeSpace());
        objAnimationTact = new DrawingTactAndWorkProgram();
        objAnimationTact.init();
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
            if (codeBlock.firstElementChild){
                codeBlock.removeChild(codeBlock.firstElementChild);
            } else{
                codeBlock.innerHTML = strCode;
            }
        };

        this.endAnimation = function () {
            codeBlock.innerHTML = '';
            elementNameProgram.innerHTML = '';
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
            btnInterrupt = document.getElementById('interrupt-button');
            var blockTactCube = document.getElementById('tact-cube');
            arrayColorOfTactCubes = blockTactCube.getElementsByClassName('one-tact-cube');
            countTactCubes = arrayColorOfTactCubes.length;
            var blockTactProgram = document.getElementById('tact-program');
            arrayOfListNamePrograms = blockTactProgram.getElementsByClassName('one-tact-name-program');
            arrayOfListIconPrograms = blockTactProgram.getElementsByClassName('one-tact-ico-program');
            countNameAndIcons = arrayOfListNamePrograms.length;
            for (var incColor = 0; incColor < countTactCubes; incColor++) {
                arrayColorString[incColor] = whiteColor;
            }
            btnInterrupt.addEventListener('click', function () {
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
            if (arrayAllProcess.length > 1) {
                return;
            }
            pointerToInterval = setInterval(runAnimation, 1000);
            runAnimation();
        };

        var runAnimation = function () {
            if (arrayAllProcess.length === 0){
                objAnimationTact.endPlay();
                return;
            }

            var firstProgramForAnimation = arrayAllProcess[0];
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
                if (firstProcess.normName === 'INTERRUPT') {
                    arrayAllProcess.splice(0, 1);
                } else {
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

    var addAllTagsPrograms = function () {
        var elementProgram = document.createElement('input');
        elementProgram.className = 'exe-icons';
        elementProgram.setAttribute('type', 'image');
        var blockIco = document.getElementById('list-exe');
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

    function runProgram(event) {
        var targetElement = event.target.cloneNode(true);
        var nameProgram = targetElement.getAttribute('data-name-program');
        var process = {
            id: idProcess++,
            name: nameProgram,
            normName: allPrograms[nameProgram].name,
            context: allPrograms[nameProgram].context,
            objImage: allPrograms[nameProgram].objImage,
            elementInBookmarks: targetElement
        };
        putToBookmarksBlock(process);
        putProcessToRamOrSwap(process);
        objAnimationTact.initPlay();
    }

    function putToBookmarksBlock(process) {
        var elementInBookmarks = process.elementInBookmarks;
        elementInBookmarks.addEventListener('click', function () {
            showContext(process);
        });
        elementInBookmarks.className = 'exe-icon-in-bookmark';
        var bookmarkElement = document.getElementById('bookmarks-of-context');
        bookmarkElement.appendChild(elementInBookmarks);
        elementInBookmarks.click();
    }

    function putProcessToRamOrSwap(process) {
        if (!objRam.setProcess(process)) {
            if (!objSwap.setProcess(process)) {
                return;
            }
        }
        process.tact = {
            counterTact: process.context.countTact,
            storageTact: process.context.countTact,
            color: objHelper.getRandomColor()
        };
        arrayAllProcess.push(process);
    }

    function stopProcess(process) {
        var elementIco = process.elementInBookmarks;
        if (elementIco.nextElementSibling) {
            var nextProgram = elementIco.nextElementSibling;
            nextProgram.click();
        } else if (elementIco.previousElementSibling) {
            var nextProgram = elementIco.previousElementSibling;
            nextProgram.click();
        } else {
            objAnimationTact.endPlay();
            cleanBlockTextContext();
            objAnimationProgram.endAnimation();
        }
        elementIco.parentNode.removeChild(elementIco);
        deleteProcessFromRawOrSwap(process);
    }

    function deleteProcessFromRawOrSwap(process) {
        if (!objRam.deleteProcess(process)) {
            if (!objSwap.deleteProcess(process)) {
                console.log('Неоткуда удлять процесс');
            }
        }
        arrayAllProcess.deleteProcess(process);
    }

    function makeActiveIcoFromBookmarks(elementInBookmarks) {
        if (activeIcoForShowContext) {
            activeIcoForShowContext.style.opacity = 0.3;
        }
        elementInBookmarks.style.opacity = 1;
        activeIcoForShowContext = elementInBookmarks;
    }

    function cleanBlockTextContext() {
        var blockTextContext = document.getElementById('text-context');
        while (blockTextContext.firstElementChild) {
            blockTextContext.removeChild(blockTextContext.firstElementChild);
        }
    }

    function showContext(process) {
        makeActiveIcoFromBookmarks(process.elementInBookmarks);
        var contextProgram = process.context;
        cleanBlockTextContext();
        var buttonStopProcess = document.createElement('p');
        buttonStopProcess.innerHTML = 'Остановить процесс';
        buttonStopProcess.className = 'stop-process';
        buttonStopProcess.addEventListener('click', function () {
            stopProcess(process);
        });
        var countThreadElement = document.createElement('p');
        countThreadElement.className = 'count-tread-memory';
        countThreadElement.innerHTML = 'Количество потоков: ' + contextProgram.numberThread;
        var sizeMemoryElement = document.createElement('p');
        sizeMemoryElement.className = 'count-tread-memory';
        sizeMemoryElement.innerHTML = 'Занимает памяти: ' + contextProgram.sizeMemory + ' (Mb), ' + contextProgram.countTact + ' такта(ов)';
        var outerBlockModuleAndHidden = document.createElement('div');
        outerBlockModuleAndHidden.className = 'module-and-title-block';
        var blockTitleListOfModules = document.createElement('div');
        blockTitleListOfModules.className = 'title-list-modules';
        blockTitleListOfModules.innerHTML = 'Подключенные модули';
        var blockModules = document.createElement('div');
        blockModules.className = 'module-with-list';
        blockModules.style.display = 'block';
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
        outerBlockModuleAndHidden.appendChild(blockTitleListOfModules);
        outerBlockModuleAndHidden.appendChild(blockModules);
        blockTextContext.appendChild(buttonStopProcess);
        blockTextContext.appendChild(countThreadElement);
        blockTextContext.appendChild(sizeMemoryElement);
        blockTextContext.appendChild(outerBlockModuleAndHidden);
        var descriptionColumn = ['Баз. адрес', "Тип", "Состояние", "Защита"];
        var blockVirtualMemory = document.createElement('div');
        blockVirtualMemory.className = 'block-virtual-memory';
        var tableVirtualMemory = document.createElement('table');
        tableVirtualMemory.className = 'table-virtual-memory';
        var countColumn = descriptionColumn.length;
        var headerRow = document.createElement('tr');
        for (var incNameColumn = 0; incNameColumn < countColumn; incNameColumn++) {
            var column = document.createElement('th');
            column.innerHTML = descriptionColumn[incNameColumn];
            headerRow.appendChild(column)
        }
        tableVirtualMemory.appendChild(headerRow);
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

    var addEventListenerForDispatcherDevice = function () {
        var generalOuterBlock = document.getElementById('system-dispatcher');
        var arrayBlockOptions = generalOuterBlock.getElementsByClassName('option-device');
        var arrayBlockForDiagram = generalOuterBlock.getElementsByClassName('outer-block-for-canvas');
        var arrayFunctionForOptions = [showHddMemory, showRamMemory, showProcessLive, showSwapMemory];
        var countOptions = arrayBlockOptions.length;
        for (var incOption = 0; incOption < countOptions; incOption++) {
            arrayBlockOptions[incOption].addEventListener('click',
                (function () {
                    var numberOption = incOption;
                    return (function () {
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



