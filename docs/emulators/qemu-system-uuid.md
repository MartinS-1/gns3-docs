---
id: qemu-system-uuid
title: Qemu system UUID
sidebar_label: Qemu system UUID
---

Like any real computer, Qemu attributes a UUID to the system. This is stored in the SMBIOS:

https://software.intel.com/en-us/Uniqueness-of-UUID

Most of the time, you won’t need to set a UUID yourself. However this information could be used by vendors (for example), to check for a valid licence.

A UUID is generated by default for each node included in a project. This UUID is kept across machine reboots.

To force a UUID, you will have to pass the ```-uuid``` option to the Qemu command line. This can be set in the advanced settings tab, when editing a nodes global configuration:

![screenshot](../../img/qemu-system-uuid/1.jpg)