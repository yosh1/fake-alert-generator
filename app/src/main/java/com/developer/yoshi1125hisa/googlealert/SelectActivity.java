package com.developer.yoshi1125hisa.googlealert;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class SelectActivity extends AppCompatActivity {
    TextView brandText;
    TextView modelText;
    TextView virusText;
    TextView damage1Text;
    TextView damage2Text;
    TextView damage3Text;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_select);

        brandText = findViewById(R.id.brand);
        modelText = findViewById(R.id.model);
        virusText = findViewById(R.id.virus);
        damage1Text = findViewById(R.id.damage1);
        damage2Text = findViewById(R.id.damage2);
        damage3Text = findViewById(R.id.damage3);

        //ブランド名(brand)、端末名(model)、ウイルスの数(virus)、破損するもの(damage1~3)

        //http://www.nambuplace.tk/LieGoogle/?virus=(ウイルスの数)&brand=(ブランド名)&model=(機種名)&damage1=(破損するもの1)&damage2=(破損するもの2)&damage3=(破損するもの3)
    }

    public void generate(View v){

        // エディットテキストのテキストを取得します
        String brand = brandText.getText().toString();
        String model= modelText.getText().toString();
        String virus = virusText.getText().toString();
        String damage1 = damage1Text.getText().toString();
        String damage2 = damage2Text.getText().toString();
        String damage3 = damage3Text.getText().toString();

        String createUrl = "http://www.nambuplace.tk/LieGoogle/?virus="+virus+"&brand="+brand+"&model="+model+"&damage1="+damage1+"&damage2="+damage2+"&damage3="+damage3;


        /*
        //WebView

        //Toast.makeText(this, createUrl, Toast.LENGTH_SHORT).show();
        Intent intent = new Intent(this,WebActivity.class);
        intent.putExtra("URL", createUrl);
        startActivity(intent);
        */

        //Browser

        Uri uri = Uri.parse(createUrl);
        Intent i = new Intent(Intent.ACTION_VIEW,uri);
        startActivity(i);

    }

    public void clear(View v) {
        brandText.getEditableText().clear();
        modelText.getEditableText().clear();
        virusText.getEditableText().clear();
        damage1Text.getEditableText().clear();
        damage2Text.getEditableText().clear();
        damage3Text.getEditableText().clear();
    }
}
