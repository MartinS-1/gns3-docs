(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{168:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return b}));var n=o(2),a=(o(0),o(211)),r=o(213);const s={id:"your-first-gns3-topology",title:"Your First GNS3 Topology",sidebar_label:"Your first GNS3 topology"},i={id:"getting-started/your-first-gns3-topology",isDocsHomePage:!1,title:"Your First GNS3 Topology",description:"Introduction",source:"@site/docs/getting-started/your-first-gns3-topology.md",permalink:"/docs/getting-started/your-first-gns3-topology",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/getting-started/your-first-gns3-topology.md",sidebar_label:"Your first GNS3 topology",sidebar:"someSidebar",previous:{title:"GNS3 Setup wizard with the GNS3 VM",permalink:"/docs/getting-started/setup-wizard-gns3-vm"},next:{title:"Your First Cisco Topology",permalink:"/docs/getting-started/your-first-cisco-topology"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Get to know your GNS3 Graphical User Interface (GUI)",id:"get-to-know-your-gns3-graphical-user-interface-gui",children:[{value:"On first start up",id:"on-first-start-up",children:[]},{value:"Screen Layout",id:"screen-layout",children:[]},{value:"GNS3 Workspace",id:"gns3-workspace",children:[]},{value:"GNS3 Toolbar",id:"gns3-toolbar",children:[]},{value:"Devices Toolbar",id:"devices-toolbar",children:[]}]},{value:"Create your Topology",id:"create-your-topology",children:[]}],l={rightToc:c};function b({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"This document explains how to configure a simple GNS3 topology which consists of two Virtual PC Simulator (VPCS) devices.This is a simple way to test your GNS3 installation and build your first topology."),Object(a.b)("p",null,"VPCS PCs are installed by default as part of the GNS3 installation on Windows and Mac OS."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This document assumes that you already have GNS3 installed.  "))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Video: ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=C9JEq6CBaJo&feature=emb_title"}),"https://www.youtube.com/watch?v=C9JEq6CBaJo&feature=emb_title"))),Object(a.b)("h2",{id:"get-to-know-your-gns3-graphical-user-interface-gui"},"Get to know your GNS3 Graphical User Interface (GUI)"),Object(a.b)("h3",{id:"on-first-start-up"},"On first start up"),Object(a.b)("p",null,"When you first start GNS3 2.2.0, create a new project by clicking ",Object(a.b)("strong",{parentName:"p"},"File->New_blank_project")),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/1.jpg")}),Object(a.b)("p",null,"Name the project as desired and then click ",Object(a.b)("strong",{parentName:"p"},"OK"),":"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/2.jpg")}),Object(a.b)("h3",{id:"screen-layout"},"Screen Layout"),Object(a.b)("p",null,"The following figure shows a screenshot of the GNS graphical user interface which we will quickly discuss so you know some of the terminology used:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/3.jpg")}),Object(a.b)("h3",{id:"gns3-workspace"},"GNS3 Workspace"),Object(a.b)("p",null,"The GNS3 workspace is the area of GNS3 where you create topologies by adding devices and links:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/4.jpg")}),Object(a.b)("h3",{id:"gns3-toolbar"},"GNS3 Toolbar"),Object(a.b)("p",null,"The GNS3 toolbar is found at the top of the GNS3 GUI and contains groups of icons that allow you to easily perform common tasks:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/5.jpg")}),Object(a.b)("p",null,"The toolbar groups icons into specific functions or features. This gives you a simple way of getting things done."),Object(a.b)("h3",{id:"devices-toolbar"},"Devices Toolbar"),Object(a.b)("p",null,"The devices toolbar allows you to add devices to your network topology. You do this by dragging devices from the Toolbar to the GNS3 workspace (explained below)."),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/6.jpg")}),Object(a.b)("p",null,"The devices toolbar is grouped into different types by default:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tool"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/7.jpg")})),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Routers")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/8.jpg")})),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Switches")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/9.jpg")})),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"End Devices")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/10.jpg")})),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Security Devices")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/11.jpg")})),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"All Devices")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/12.jpg")})),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add a link")))),Object(a.b)("p",null,"You will find both simulated devices as well as emulated devices in the various device groupings."),Object(a.b)("p",null,"The Topology Summary pane is located towards the upper-right side of the GNS3 GUI, and will list the nodes that are in the current topology:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/13.jpg")}),Object(a.b)("p",null,"As you\u2019ll see shortly, this pane not only lists the current topology devices, but also their state (on/off), as well as list the interface connections between the various nodes."),Object(a.b)("p",null,"The Server Summary pane shows the Local Server status, as well as that of the GNS3-VM (if in use):"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/14.jpg")}),Object(a.b)("p",null,"In this instance, the both the local server (the name of the PC) and the GNS3-VM are currently up and running.  The local server\u2019s resource usage includes more than just what GNS3 itself is using (if you are heavily multitasking while running GNS3, you\u2019ll see that reflected in the resource summary), while the resource usage for the GNS3-VM is only showing what ",Object(a.b)("em",{parentName:"p"},"it")," is currently using."),Object(a.b)("p",null,"Lastly, the GNS3 Console is at the bottom of the GNS3 GUI:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/15.jpg")}),Object(a.b)("p",null,"Errors GNS3 encounters while executing tasks will be written here, and GNS3 mods may ask you to run debug commands here, to better isolate an issue you may be encountering."),Object(a.b)("h2",{id:"create-your-topology"},"Create your Topology"),Object(a.b)("p",null,"To create a new GNS3 topology, click the ",Object(a.b)("strong",{parentName:"p"},"Browse End Devices")," button on the ",Object(a.b)("strong",{parentName:"p"},"Devices Toolbar"),":"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/16.jpg")}),Object(a.b)("p",null,"The toolbar will expand to show available devices of that type. In this example, the VPCS device is one of the available types:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/17.jpg")}),Object(a.b)("p",null,"To create your first GNS3 topology, first click on ",Object(a.b)("strong",{parentName:"p"},"Switches")," in the Devices Toolbar.  Drag and drop the built-in ethernet switch to the GNS3 ",Object(a.b)("strong",{parentName:"p"},"Workspace")," as shown below. An instance of the device called ",Object(a.b)("strong",{parentName:"p"},"Ethernetswitch-1")," will now be available in the topology."),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/18.jpg")}),Object(a.b)("p",null,"Next, click on ",Object(a.b)("strong",{parentName:"p"},"End devices")," in the ",Object(a.b)("strong",{parentName:"p"},"Devices Toolbar"),", and drag and drop an instance of VPCS (a simple PC simulator) into the ",Object(a.b)("strong",{parentName:"p"},"Workspace"),", which will be called PC-1:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/19.jpg")}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you already have the GNS-VM imported and configured, you\u2019ll be prompted to select whether you wish to run the VPCS node via the local server or the GNS3-VM. Select whichever you wish, since VPCS can run in either."))),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/20.jpg")}),Object(a.b)("p",null,"The above image is listing the name of the PC, indicating that you\u2019d like to run this node via the local server."),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/21.jpg")}),Object(a.b)("p",null,"The above image lists \u201cGNS3 VM\u201d, indicating you\u2019d like to run this node via the GNS3 VM"),Object(a.b)("p",null,"Drag and drop that same VPCS node again into the ",Object(a.b)("strong",{parentName:"p"},"Workspace"),", which will add a second node called \u201cPC-2\u201d, so that you have the resulting devices in your topology:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/22.jpg")}),Object(a.b)("p",null,"To collapse the ",Object(a.b)("strong",{parentName:"p"},"Browse End Devices")," toolbar, either click the ",Object(a.b)("strong",{parentName:"p"},"Browse End Devices")," button again, or click the X shown below:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/23.jpg")}),Object(a.b)("p",null,"Notice that the Topology Summary pane has now changed, to reflect that we have three nodes in our workspace:  Ethernetswitch-1, PC-1, and PC-2:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/24.jpg")}),Object(a.b)("p",null,"Click the ",Object(a.b)("strong",{parentName:"p"},"Add a Link")," button to start adding links to your topology. The mouse cursor will change to indicate that links can be added:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/25.jpg")}),Object(a.b)("p",null,"Click on ",Object(a.b)("strong",{parentName:"p"},"PC-1")," in your topology to display available interfaces. In this example, only Ethernet0 is available (this is device dependent):"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/26.jpg")}),Object(a.b)("p",null,"Click Ethernet0 on PC-1, and then left-click on Ethernetswitch-1:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/27.jpg")}),Object(a.b)("p",null,"Select Ethernet0 on Ethernetswitch-1 to complete the connection. To create a link between Ethernetswitch-1 and PC-2, you can click on either node, select an interface, click on the other node, and make that connection:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/28.jpg")}),Object(a.b)("p",null,"Click the ",Object(a.b)("strong",{parentName:"p"},"Add a Link")," button to stop adding links. The mouse cursor will change back to normal to indicate that you have stopped adding links."),Object(a.b)("p",null,"The first thing you\u2019ll notice is that the indicator symbols next to the devices are red. The means the devices are currently powered off:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/29.jpg")}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Devices that are suspended will have yellow indicators. Devices that are powered on will have green indicators even if their interfaces are in the down/down state (such as router/switch interfaces that have been administratively shut).  You\u2019ll need to double check the running config of any routers or switches to ensure that their interfaces have been manually enabled."),Object(a.b)("p",{parentName:"div"},"This powered on/powered off/suspended state is also reflected in the ",Object(a.b)("strong",{parentName:"p"},"Topology_Summary")))),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/30.jpg")}),Object(a.b)("p",null,"It\u2019s helpful to toggle on the interface names, as well as add notes to your topology, to make it easier to see which interfaces are connected between devices, as well as adding notes such as subnets/ip addressing, listing OSPF areas or BGP autonomous Systems, and so forth.  These two buttons on the toolbar will enable you to toggle interface names on/off, and add notes:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/31.jpg")}),Object(a.b)("p",null,"Below is an example of this in use. You can see that PC-1\u2019s e0 interface is connected to e0 of Ethernetswitch-1, and e0 of PC-2 is connected to Ethernetswitch-1\u2019s e1 interface, along with a simple note:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/32.jpg")}),Object(a.b)("p",null,"The Green \u201cPlay\u201d button on the ",Object(a.b)("strong",{parentName:"p"},"GNS3 Toolbar")," will power on all devices in the topology, while the Yellow \u201cPause\u201d button will suspend them, and the Red \u201cStop\u201d button powers everything in the topology down:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/33.jpg")}),Object(a.b)("p",null,"This is also reflected in the ",Object(a.b)("strong",{parentName:"p"},"Topology Summary"),"."),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/34.jpg")}),Object(a.b)("p",null,"You are now ready to configure your devices. Click the ",Object(a.b)("strong",{parentName:"p"},"Console connect to all devices")," button on the ",Object(a.b)("strong",{parentName:"p"},"GNS3 Toolbar")," to open a connection to every device in the topology:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/35.jpg")}),Object(a.b)("p",null,"By default, GNS3 will use Solar-PuTTY in Windows, as it\u2019s installed as part of the GNS3 installation process, but you can configure GNS3 to use other terminal emulators (such as SecureCRT or Gnome-Term):"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/36.jpg")}),Object(a.b)("p",null,"Let\u2019s assign some IP addresses to PC-1 and PC-2, and ensure they can communicate with one another:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PC-1> ip 10.1.1.1 255.255.255.0\nChecking for duplicate address...\nPC1 : 10.1.1.1 255.255.255.0\nPC-1>\nPC-2> ip 10.1.1.2 255.255.255.0\nChecking for duplicate address...\nPC1 : 10.1.1.2 255.255.255.0\nPC-2>\n")),Object(a.b)("p",null,"Can PC-1 ping PC-2?"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PC-1> ping 10.1.1.2\n84 bytes from 10.1.1.2 icmp_seq=1 ttl=64 time=0.985 ms\n84 bytes from 10.1.1.2 icmp_seq=2 ttl=64 time=0.982 ms\n84 bytes from 10.1.1.2 icmp_seq=3 ttl=64 time=0.000 ms\n84 bytes from 10.1.1.2 icmp_seq=4 ttl=64 time=0.981 ms\n84 bytes from 10.1.1.2 icmp_seq=5 ttl=64 time=0.982 ms\n")),Object(a.b)("p",null,"Yes, it can. Now let\u2019s ping PC-1 from PC-2:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PC-2> ping 10.1.1.1\n84 bytes from 10.1.1.1 icmp_seq=1 ttl=64 time=0.980 ms\n84 bytes from 10.1.1.1 icmp_seq=2 ttl=64 time=0.982 ms\n84 bytes from 10.1.1.1 icmp_seq=3 ttl=64 time=0.997 ms\n84 bytes from 10.1.1.1 icmp_seq=4 ttl=64 time=1.029 ms\n84 bytes from 10.1.1.1 icmp_seq=5 ttl=64 time=0.996 ms\n")),Object(a.b)("p",null,"That succeeds as well."),Object(a.b)("p",null,"Now let\u2019s add a third PC to our topology:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/37.jpg")}),Object(a.b)("p",null,"Instead of clicking the large green Play button on the ",Object(a.b)("strong",{parentName:"p"},"Toolbar"),", we can right-click on PC-3, and select ",Object(a.b)("strong",{parentName:"p"},"Start")," to power it on:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/38.jpg")}),Object(a.b)("p",null,"We\u2019ll do the same thing a second time, but we\u2019ll select ",Object(a.b)("strong",{parentName:"p"},"Console"),", since we already have console tabs open for the other two devices:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/39.jpg")}),Object(a.b)("p",null,"That will open a new third tab in Solar-Putty for us:"),Object(a.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/your-first-gns3-topology/40.jpg")}),Object(a.b)("p",null,"(if we\u2019d clicked the Console button on the Toolbar, it would\u2019ve opened tabs for all three devices, even though we already had two of them open already for PC-1 and PC-2)."),Object(a.b)("p",null,"Let\u2019s assign an IP address to PC-3, and see if all three PCs can ping one another:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PC-3> ip 10.1.1.3 255.255.255.0\nChecking for duplicate address...\nPC1 : 10.1.1.3 255.255.255.0\nPC-3>\n")),Object(a.b)("p",null,"Can PC-1 ping PC-2 and PC-3?"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PC-1> ping 10.1.1.2\n84 bytes from 10.1.1.2 icmp_seq=1 ttl=64 time=0.985 ms\n84 bytes from 10.1.1.2 icmp_seq=2 ttl=64 time=0.982 ms\n84 bytes from 10.1.1.2 icmp_seq=3 ttl=64 time=0.000 ms\n84 bytes from 10.1.1.2 icmp_seq=4 ttl=64 time=0.981 ms\n84 bytes from 10.1.1.2 icmp_seq=5 ttl=64 time=0.982 ms\nPC-1> ping 10.1.1.3\n84 bytes from 10.1.1.3 icmp_seq=1 ttl=64 time=0.000 ms\n84 bytes from 10.1.1.3 icmp_seq=2 ttl=64 time=1.001 ms\n84 bytes from 10.1.1.3 icmp_seq=3 ttl=64 time=0.982 ms\n84 bytes from 10.1.1.3 icmp_seq=4 ttl=64 time=0.984 ms\n84 bytes from 10.1.1.3 icmp_seq=5 ttl=64 time=0.988 ms\n")),Object(a.b)("p",null,"Yes it can. Can PC-2 ping PC-1 and PC-3?"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PC-2> ping 10.1.1.1\n84 bytes from 10.1.1.1 icmp_seq=1 ttl=64 time=0.980 ms\n84 bytes from 10.1.1.1 icmp_seq=2 ttl=64 time=0.982 ms\n84 bytes from 10.1.1.1 icmp_seq=3 ttl=64 time=0.997 ms\n84 bytes from 10.1.1.1 icmp_seq=4 ttl=64 time=1.029 ms\n84 bytes from 10.1.1.1 icmp_seq=5 ttl=64 time=0.996 ms\nPC-2> ping 10.1.1.3\n84 bytes from 10.1.1.3 icmp_seq=1 ttl=64 time=0.999 ms\n84 bytes from 10.1.1.3 icmp_seq=2 ttl=64 time=0.985 ms\n84 bytes from 10.1.1.3 icmp_seq=3 ttl=64 time=0.000 ms\n84 bytes from 10.1.1.3 icmp_seq=4 ttl=64 time=0.980 ms\n84 bytes from 10.1.1.3 icmp_seq=5 ttl=64 time=0.000 ms\n")),Object(a.b)("p",null,"It also can. Since both PC-1 and PC-2 can ping PC-3, it\u2019s safe to assume it can ping both of them as well, but we\u2019ll run the test anyway, just to be safe:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PC-3> ping 10.1.1.1\n84 bytes from 10.1.1.1 icmp_seq=1 ttl=64 time=0.999 ms\n84 bytes from 10.1.1.1 icmp_seq=2 ttl=64 time=0.000 ms\n84 bytes from 10.1.1.1 icmp_seq=3 ttl=64 time=0.980 ms\n84 bytes from 10.1.1.1 icmp_seq=4 ttl=64 time=0.997 ms\n84 bytes from 10.1.1.1 icmp_seq=5 ttl=64 time=0.000 ms\nPC-3> ping 10.1.1.2\n84 bytes from 10.1.1.2 icmp_seq=1 ttl=64 time=0.999 ms\n84 bytes from 10.1.1.2 icmp_seq=2 ttl=64 time=0.988 ms\n84 bytes from 10.1.1.2 icmp_seq=3 ttl=64 time=0.999 ms\n84 bytes from 10.1.1.2 icmp_seq=4 ttl=64 time=0.981 ms\n84 bytes from 10.1.1.2 icmp_seq=5 ttl=64 time=0.980 ms\n")),Object(a.b)("p",null,"Good. Everything works as expected.  Now, since GNS3 doesn\u2019t save the configurations of these by default, it\u2019s a good idea to go ahead and manually do so ourselves, so that if we reload this project at a later date, the PCs will still be configured the way we left them:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"PC-1> save\nSaving startup configuration to startup.vpc\n.  done\nPC-1>\nPC-2> save\nSaving startup configuration to startup.vpc\n.  done\nPC-2>\nPC-3> save\nSaving startup configuration to startup.vpc\n.  done\nPC-3>\n")),Object(a.b)("p",null,"(If you\u2019d like to see what other commands are available in VPCS, you can enter \u2018?\u2019 (minus the quotes) to see what else VPCS supports).  "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Congratulations!")," You have configured a basic GNS3 topology. From here on, you can create much more complex topologies and test and learn various technologies such as OSPF, EIGRP, BGP, STP and many others."))}b.isMDXComponent=!0},211:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return u}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(o),m=n,u=p["".concat(s,".").concat(m)]||p[m]||g[m]||r;return o?a.a.createElement(u,i(i({ref:t},l),{},{components:o})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},212:function(e,t,o){"use strict";var n=o(0),a=o(52);t.a=function(){return Object(n.useContext)(a.a)}},213:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));o(76);var n=o(212),a=o(214);function r(e,t){var o=void 0===t?{}:t,r=o.forcePrependBaseUrl,s=void 0!==r&&r,i=o.absolute,c=void 0!==i&&i,l=Object(n.a)().siteConfig,b=(l=void 0===l?{}:l).baseUrl,p=void 0===b?"/":b,g=l.url;if(!e)return e;if(s)return p+e;if(!Object(a.a)(e))return e;var m=p+e.replace(/^\//,"");return c?g+m:m}},214:function(e,t,o){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}o.d(t,"a",(function(){return n}))}}]);