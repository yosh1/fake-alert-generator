package com.developer.yoshi1125hisa.googlealert;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebActivity extends AppCompatActivity {
    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web);


        Intent intent = this.getIntent();
     String getUrl = intent.getStringExtra("URL");
        //レイアウトで指定したWebViewのIDを指定する。
        WebView  webView = (WebView)findViewById(R.id.webView);

        //リンクをタップしたときに標準ブラウザを起動させない
        webView.setWebViewClient(new WebViewClient());


        //jacascriptを許可する
        webView.getSettings().setJavaScriptEnabled(true);

        webView.getSettings().setLoadWithOverviewMode(true);
        webView.getSettings().setUseWideViewPort(true);

        webView.setInitialScale(1);

        webView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);

        //最初にgoogleのページを表示する。
        webView.loadUrl(getUrl);


    }

}