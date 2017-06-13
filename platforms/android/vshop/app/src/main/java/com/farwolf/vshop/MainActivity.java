package com.farwolf.vshop;

import android.view.KeyEvent;
import android.view.View;
import android.widget.Toast;

import com.farwolf.weex.activity.WeexActivity;

import org.androidannotations.annotations.EActivity;

import java.util.Calendar;

@EActivity
public class MainActivity extends WeexActivity {


//退出界面
long lasttime = 0;

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {

        if (event.getAction() == KeyEvent.ACTION_DOWN) {
            if (event.getKeyCode() == KeyEvent.KEYCODE_BACK) {

                return exit();
            }
        }
        return super.dispatchKeyEvent(event);
    }


    public void onResume()
    {
        super.onResume();

    }


    public void onPause()
    {
        super.onPause();

    }

    private boolean exit() {

        long n = Calendar.getInstance().getTime().getTime();

        if (n - lasttime < 2000) {
            System.exit(0);
        }
        else {
            Toast.makeText(this, "再按一次退出应用", Toast.LENGTH_SHORT).show();
            lasttime = n;
        }
        return true;
    }




    @Override
    public void init() {

//        url=pref.url().get();
//
//        this.title.setBack();
//        this.title.setRightImage(R.drawable.refresh_selector);
//        this.title.rightview.setVisibility(View.VISIBLE);
//        this.title.right_image.setBackgroundResource(R.drawable.refresh_selector);
//        this.title.setRightClick(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
////                showTool();
////                weexFactory.jump("index.js",SecondActivity_.class);
//                render(url);
//
//            }
//        });
//
//        this.title.rightview.setOnLongClickListener(new View.OnLongClickListener() {
//            @Override
//            public boolean onLongClick(View view) {
//                showTool();
//                return false;
//            }
//        });
//        render("tabpage.js");
//        render("viewpager.js");
       render("http://192.168.1.100:2222/login.js");
//        weex.startDebug();
    }
}
