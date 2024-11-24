
export default function About() {
    return (
        <div className="about py-5">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <div className="about-text p-4">
                    <h1 className="mb-4 fw-bold" style={{color: "var(--primary-color)"}}>
                        Who We Are
                    </h1>
                    <p style={{color: "var(--secondary-color)"}}>
                        Win Motor Myanmar Co., Ltd. ကို အစုရှယ်ယာများဖြင့် ပုဂ္ဂလိကကုမ္ပဏီလီမိတက်အဖြစ် မြန်မာနိုင်ငံကုမ္ပဏီများအက်ဥပဒေ ၁၉၁၄ အရ၊ ၂၀၁၄ ခုနှစ် သြဂုတ်လ ၂၇ ရက်နေ့တွင် စတင်ဖွဲစည်းခဲ့ပါသည်။ 
                    </p>
                    <p style={{color: "var(--secondary-color)"}}>
                        ကုမ္ပဏီ၏ ကုမ္ပဏီမှတ်ပုံတင်အမှတ်မှာ 118274865 ဖြစ်ပြီး၊ မှတ်ပုံတင်ရုံးသည် သမိုင်းဘူတာရုံလမ်း (၁)၊ အမှတ် ၂၃/၂၉ (အေ/ဘီ)၊ မရမ်းကုန်းမြိုနယ်၊ ရန်ကုန်တိုင်းဒေသကြီး၊ မြန်မာ မြန်မာနိုင်ငံတွင် ဖြစ်သည်။
                    </p>
                    <p style={{color: "var(--secondary-color)"}}>
                        ကုမ္ပဏီသည် 2024 ခုနှစ်တွင်၊ German ဘရန်းဖြစ်သော Volkswagen လျှပ်စစ်ကားများနှင့် အရောင်းပါတနာအတွက်စာချုပ်ချုပ်ဆိုနိုင်ခဲ့ပြီး၊ အခြားအမှတ်တံဆိပ်ဖြစ်တော Audi လျှပ်စစ်ကားများနှင့် 
                        Toyota လျှပ်စစ်ကားများကိုလည်းအရောင်းကိုယ်စားလှယ်ဖြင့်ပြည်တွင်းသိုတင်သွင်းရောင်းချနိုင်ခဲ့ပြီး၊ Geely Auto Group အောက်မှထုတ်လုပ်သော Livan Automotive 
                        လျှပ်စစ်ကားများ နှင့်လည်း အရောင်းပါတနာစာချုပ်ကိုချုပ်ဆိုနိုင်ခဲ့ပါသည်၊၊
                    </p>
                    <p style={{color: "var(--secondary-color)"}}>
                        ကုမ္ပဏီ၏ ရည်မှန်းချက်မှာ မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ အရည်အသွေးမြင့် လျှပ်စစ်မော်တော်ယာဉ်များနှင့် ဝန်ဆောင်မှုများကို ပံ့ပိုးပေးရန်ဖြစ်ပြီး၊ နိုင်ငံတဝှမ်းလျှပ်စစ်ကားများတိုးတက်လာရေးအတွက် 
                        အထောက်အကူဖြစ်စေရန်အတွက်ရည်ရွယ်ပါသည်၊၊ 
                    </p>
                    <p style={{color: "var(--secondary-color)"}}>
                        <span className="d-block">စုံစမ်းမေးမြန်းလိုပါက</span>
                        <span className="d-block">အီးမေးလ်- <a href="info@winmotormm.com">info@winmotormm.com</a></span> 
                        <span className="d-block">အီးမေးလ်: <a href="paul@winmotormm.com">paul@winmotormm.com</a></span>
                    </p>
                    <p style={{color: "var(--secondary-color)"}} className="mb-0">
                        ဖုန်း : <span style={{color: "var(--primary-color"}}>+95 (9) 254122287</span>
                    </p>
                    <p style={{color: "var(--secondary-color)"}}>
                    ဖုန်း : <span style={{color: "var(--primary-color"}}>+95 (9) 254122299</span>
                    </p>
                    </div>
                </div>
                <div className="col-md-6 align-self-center">
                    <div className="about-img">
                    <img
                        src="/aboutUs.jpg"
                        className="img-fluid"
                        alt=""
                    />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}