var https = require('https');
var qs = require('querystring');

const param = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': '你的API Key',
    'client_secret': '你的Secret Key'
});

https.get(
    {
        hostname: 'aip.baidubce.com',
        path: '/oauth/2.0/token?' + param,
        agent: false
    },
    function (res) {
        // 在标准输出中查看运行结果
        res.pipe(process.stdout);
    }
);


// "access_token":"24.440c39cd127bd6c2695e3273df0e4f4e.2592000.1534430714.282335-11548952",

// {"access_token":"24.440c39cd127bd6c2695e3273df0e4f4e.2592000.1534430714.282335-11548952","session_key":"9mzdDxA6fHO1muNiyr4y0Qrj5ypkjhPMMaxs0SFx+EuWMmxSka4f9m5wPHvVY0b2Vz+SQUvTEpWCjlZTezKVdPaGJmB25A==","scope":"public brain_all_scope vis-faceverify_faceverify_h5-face-liveness vis-faceverify_FACE_V3 wise_adapt lebo_resource_base lightservice_public hetu_basic lightcms_map_poi kaidian_kaidian ApsMisTest_Test\u6743\u9650 vis-classify_flower lpq_\u5f00\u653e cop_helloScope ApsMis_fangdi_permission smartapp_snsapi_base iop_autocar","refresh_token":"25.87c5f9b0bb3ccab9d6bb853d96e775c6.315360000.1847198714.282335-11548952","session_secret":"1e0e8977d8854b2afdfb6a2bbb1b7c4f","expires_in":2592000}
