package com.developer.yoshi1125hisa.googlealert;

import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.AndroidRuntimeException;
import android.util.DisplayMetrics;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import com.google.firebase.analytics.FirebaseAnalytics;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.journeyapps.barcodescanner.BarcodeEncoder;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class QrActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_qr);

        // Get instance.
        FirebaseAnalytics fba = FirebaseAnalytics.getInstance(this);

        // Send event log.
        Bundle bundle = new Bundle();
        bundle.putString("fake_alert_generator", "QrActivity");
        fba.logEvent("app_started", bundle);

        Intent intent = this.getIntent();
        String getUrl = intent.getStringExtra("URL");

        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int winW = dm.widthPixels;
        int winH = dm.heightPixels;

        int size;

        if (winH >= winW){
            size = winW;
        }else{
            size = winH;
        }

        //QRコード画像の大きさを指定(pixel)

        try {
            BarcodeEncoder barcodeEncoder = new BarcodeEncoder();
            //QRコードをBitmapで作成
            Bitmap bitmap = barcodeEncoder.encodeBitmap(getUrl, BarcodeFormat.QR_CODE, size, size);

            //作成したQRコードを画面上に配置
            ImageView imageViewQrCode = findViewById(R.id.imageView);
            imageViewQrCode.setImageBitmap(bitmap);

        } catch (WriterException e) {
            throw new AndroidRuntimeException("Barcode Error.", e);
        }

    }
}
