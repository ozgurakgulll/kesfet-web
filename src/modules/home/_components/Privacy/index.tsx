import type {FC} from "react";

const PrivacyPolicy: FC = () => {
    return (
        <div style={{padding: "2rem", maxWidth: "800px", margin: "0 auto"}}>
            <h1>KesfetApp Gizlilik Politikası</h1>

            <p>
                KesfetApp kullanıcılarının gizliliğini önemsemektedir. Bu uygulama Google
                AdMob ve bazı üçüncü taraf servisler kullanabilir. Bu servisler kullanıcı
                verilerini toplayabilir ve reklam gösterimi için kullanabilir.
            </p>

            <h2>Toplanan Bilgiler</h2>
            <ul>
                <li>Konum verileri (uygulama içi özellikler için)</li>
                <li>Anonim kullanım verileri (Google Analytics / reklam)</li>
            </ul>

            <h2>Veri Paylaşımı</h2>
            <p>
                Kullanıcı verileri üçüncü taraflarla yalnızca uygulamanın işlevselliği ve
                reklam gösterimi amacıyla paylaşılabilir.
            </p>

            <h2>İletişim</h2>
            <p>
                Gizlilik politikamızla ilgili sorularınız için:
                <a href="mailto:ozgur.akgul.tech@gmail.com">ozgur.akgul.tech@gmail.com</a>
            </p>
        </div>
    );
};

export default PrivacyPolicy;
