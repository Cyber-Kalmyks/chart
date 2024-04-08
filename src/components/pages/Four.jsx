import cln from "../style/Four.module.scss";
import cls from "../style/One.module.scss";

const Four = () => {
  return (
    <>
      <div className={cls.mainHeader}>
        <div className={cls.container}>
          <div className={cls.content}>
            <h1>Лабораторная работа 3 </h1>
            <h3>Название лабораторной:</h3>
            <h3>Fe – железо(общие сведения)</h3>
            <h3>Ход работы </h3>
          </div>
          <div className={cls.task}>
            <p>
              Железо -химический элемент 8-й группы (по устаревшей классификации
              — побочной подгруппы восьмой группы, VIIIB) четвёртого периода
              периодической системы химических элементов Д. И. Менделеева с
              атомным номером 26. Простое вещество железо — это ковкий
              переходный металл серебристо-белого цвета с высокой химической
              реакционной способностью: железо быстро корродирует на воздухе при
              высоких температурах или при высокой влажности. В чистом кислороде
              железо горит, а в мелкодисперсном состоянии самовозгорается и на
              воздухе.
            </p>
            <h3>
              Фотоколориметрическое определение железа в природной воде с
              салициловой кислотой
            </h3>
            <p>
              Необходимые реактивы <br />
              А. Сульфосалициловая кислота 10% р-р <br />
              Б. Ацетатный буфер CH3COOH+CH3COONa pH-4,5 <br />
              В. Стандартный р-р железа 3 основной: 0,1 г восстановленного
              железа растворяют в 10 мл конц. HCl и 3 мл конц. азотной кислоте,
              нагревают на плитке до растворения, разбавить дист. водой в мерной
              колбе на 1 л 1 мл р-ра содержит 0,1 мг железа
            </p>
            <h3>Построение калибровочного графика</h3>
            <p>
              Для приготовления эталонных р-ров в 5 мерных колб вместимостью 50
              мл вводят по 10 мл воды, а также по 1, 2, 3, 4 и 5 мл стандартного
              р-ра железа из бюретки. Во все р-ры добавляют по 5 мл ацетатного
              буфера и 10 мл 10% р-ра сульфосалициловой кислоты. Объём р-ра
              доводят до метки, колбы закрывают, тщательно перемешивают и
              оставляют стоять на 10 мин. Измеряют оптическую плотность
              полученных р-ров (используют кюветы длиной 0,5 см) и снимаем
              показания в кювете на 2 см при длине волны 490 нм, холостой р-р
              дист. воды, занося данные измерений в табл.
            </p>
            <div className={cln.table}>
              <p>С, мг</p>
              <p>0,01</p>
              <p>0,02</p>
              <p>0,03</p>
              <p>0,04</p>
              <p>0,05</p>
              <p>0,07</p>

              <p>A</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
            <h3>Определение железа 3 в сточной воде </h3>
            <p>
              В мерные колбы на 100 мл отбираем пипеткой 25 мл анализируемой
              воды , 10 мл сульфосалициловой кислоты и 5 мл ацетатного буфера,
              доводим до метки дист. водой и снимаем показания калибровочной
              кривой при (λ=490 нм, l=2 см). По калибровочному графику находим
              значение Ах-Сх . Окраску р-ра измеряют через 10 мин
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Four;
