import React from "react";
import "../style/contacts.scss";
import { Typography } from "antd";

const { Title, Text } = Typography;

const Contacts = () => {
  return (
    <div className="contacts-wrapper">
      <div className="contacts-title">
        Заинтересовала наша продукция? Свяжитесь: +7 917 270-09-99.
      </div>
      <div className="contacts-content-limit content">
        <div className="contacts__content-main">
          <Title level={2} className="contacts_mainestTitle">
            Контакты организации ООО "Альянс":
          </Title>
          <div className="contacts__left-side animate__animated animate__fadeInLeft">
            <Typography style={{ marginBottom: "10px" }}>
              <Title level={3}>Контакты отдела продаж:</Title>
              <Text style={{ fontSize: "21px" }}>+7 917 270-09-99</Text>
              <br />
              <Text style={{ fontSize: "21px" }}>+7 980 915 80 49</Text>
              <br />
              <Text style={{ fontSize: "21px" }}>+7 980 915 72 36</Text>
              <br />
              <Title level={3}>Email:</Title>
              <Text copyable>alyansbum@mail.ru</Text>
            </Typography>
            <Typography>
              <div className="contacts_leftSide__adresses">
                <Title level={3}>Адрес офиса:</Title>
                <Text>
                  420059 РТ, Казань, ул. Оренбургский тракт, д.160 офис 311{" "}
                </Text>
                <Title level={3}>Адрес склада:</Title>
                <Text>г. Казань, ул. Магистральная, д.77 </Text>
                <Title level={3}>Режим работы:</Title>
                <Text>Пн-Пт: с 8:00 до 17:00 Сб-Вс: Выходной </Text>
              </div>
            </Typography>
          </div>
          <div className="contacts__right-side animate__animated animate__fadeInRightBig">
            <div className="contacts__right-side-title">
              Схема проезда на склад:
            </div>
            <div className="contacts__right-side-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.5301402223004!2d49.09850159043475!3d55.73464692784092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415eac0cd92ad6e5%3A0x30e9b350c8c6b234!2z0JzQsNCz0LjRgdGC0YDQsNC70YzQvdCw0Y8g0YPQuy4sIDc3LCDQmtCw0LfQsNC90YwsINCg0LXRgdC_LiDQotCw0YLQsNGA0YHRgtCw0L0sIDQyMDEwMA!5e0!3m2!1sru!2sru!4v1677595972311!5m2!1sru!2sru"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
