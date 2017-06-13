package com.farwolf.weex.module;

/**
 * Created by MA on 2017/6/11.
 */

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import com.farwolf.weex.module.BluetoothConnectionExample;

public class WXPrinterModule extends WXModule{

//    public static void main(String[] args) {
//        WXPrinterModule WM = new WXPrinterModule();
//        WM.test();
//    }
@JSMethod
    public void printer(){
        BluetoothConnectionExample bce = new BluetoothConnectionExample();
        bce.test();
    }
}
