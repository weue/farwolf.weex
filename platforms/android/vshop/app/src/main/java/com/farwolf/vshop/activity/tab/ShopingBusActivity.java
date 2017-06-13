package com.farwolf.vshop.activity.tab;

import com.farwolf.weex.activity.WeexActivity;

import org.androidannotations.annotations.EActivity;

/**
 * Created by zhengjiangrong on 2017/5/23.
 */
@EActivity
public class ShopingBusActivity extends WeexActivity {

//    WithoutView.js
    @Override
    public void init() {
        this.title.setTitle("外部追溯");
        render("WithoutView.js",false);
    }
}
