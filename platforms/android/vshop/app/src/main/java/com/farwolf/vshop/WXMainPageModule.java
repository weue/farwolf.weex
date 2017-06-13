package com.farwolf.vshop;

/**
 * Created by MA on 2017/6/5.
 */
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import android.content.Intent;

public class WXMainPageModule extends WXModule {

//    登录后跳转首页
    @JSMethod
    public void gotoMain()
    {
        this.mWXSDKInstance.getContext().startActivity(new Intent(this.mWXSDKInstance.getContext(), com.farwolf.vshop.activity.tab.MainActivity_.class));

    }
}
