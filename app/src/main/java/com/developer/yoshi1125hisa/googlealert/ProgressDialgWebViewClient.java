package com.developer.yoshi1125hisa.googlealert;

import android.app.ProgressDialog;
import android.content.Context;
import android.graphics.Bitmap;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class ProgressDialgWebViewClient extends WebViewClient {
    private ProgressDialog progressDialog;

    public ProgressDialgWebViewClient(Context context, String message){
        super();

        progressDialog = new ProgressDialog(context);
        progressDialog.setMessage(message);
    }

    @Override
    public void onPageStarted(WebView view, String url, Bitmap favicon) {
        super.onPageStarted(view, url, favicon);
        progressDialog.show();
    }

    @Override
    public void onPageFinished(WebView view, String url) {
        super.onPageFinished(view, url);
        progressDialog.dismiss();
    }
}