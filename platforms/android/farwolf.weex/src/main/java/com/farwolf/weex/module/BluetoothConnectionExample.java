package com.farwolf.weex.module;

/**
 * Created by MA on 2017/6/11.
 */

import android.os.Looper;
import com.zebra.sdk.comm.BluetoothConnection;
import com.zebra.sdk.comm.Connection;

public class BluetoothConnectionExample {
//    声明静态主函数
//    public static void main(String[] args) {
//        BluetoothConnectionExample example = new BluetoothConnectionExample();
//        String theBtMacAddress = "AC:3F:A4:77:8F:C3";
//        example.sendZplOverBluetooth(theBtMacAddress);
//    }

    public void test(){
        BluetoothConnectionExample example = new BluetoothConnectionExample();
        String theBtMacAddress = "AC:3F:A4:77:8F:C3";
        example.sendZplOverBluetooth(theBtMacAddress);
    }

    private void sendZplOverBluetooth(final String theBtMacAddress) {

        new Thread(new Runnable() {
            public void run() {
                try {
                    // 为指定的蓝牙和MAC地址实例化连接。
                    Connection thePrinterConn = new BluetoothConnection(theBtMacAddress);

                    // 初始化
                    Looper.prepare();

                    // 打开连接-这里建立物理连接。
                    thePrinterConn.open();

                    // This example prints "This is a ZPL test." near the top of the label.
                    String zplData = "^XA^FO20,20^A0N,25,25^FDThis is a ZPL test.^FS^XZ";

                    // 将数据以字节数组的形式发送到打印机。
                    thePrinterConn.write(zplData.getBytes());

                    // 在关闭连接之前，请确保数据到达打印机。
                    Thread.sleep(500);

                    // 关闭连接以释放资源。
                    thePrinterConn.close();
                    Looper.myLooper().quit();
                } catch (Exception e) {
                    // 处理通信错误。
                    e.printStackTrace();
                }
            }
        }).start();
    }
}