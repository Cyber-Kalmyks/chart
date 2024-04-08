import cln from "../style/Six.module.scss";
import cls from "../style/One.module.scss";

const Six = () => {
  return (
    <>
      <div className={cls.mainHeader}>
        <div className={cls.container}>
          <div className={cls.content}>
            <h1>Лабораторная работа 4 </h1>
            <h3>Название лабораторной:</h3>
            <h3>Cu – медь(общие сведения)</h3>
            <h3>Ход работы </h3>
          </div>
          <div className={cls.task}>
            <p>
              Медь — химический элемент 11-й группы (по устаревшей классификации
              — побочной подгруппы первой группы, IB) четвёртого периода
              периодической системы химических элементов Д. И. Менделеева, с
              атомным номером 29. В виде простого вещества медь — это пластичный
              переходный металл золотисто-розового цвета (розового цвета при
              отсутствии оксидной плёнки).
            </p>
            <h3>
              Определение меди в сточных и природных водах аммиачным методом
            </h3>
            <p>
              Сущность метода: <br />
              Аммиачный метод основан на образовании ионом Cu2+ с аммиаком
              комплекса [Cu(NH3)4]2+, окрашенного в интенсивно-синий цвет. Cu2+
              + 4NH3 → [Cu(NH3)4]2+ Окраска его достаточно устойчива,
              колориметрировать раствор можно с помощью фотоэлектрического
              колориметра ФЭК-56М или КФК-2
            </p>
            <h3>Необходимые реактивы, аппаратура, посуда:</h3>
            <ol>
              <li>Фотоколориметр ФЭК-56М или КФК-2.</li>
              <li>Кюветы шириной 190 мм.</li>
              <li>Красный светофильтр.</li>
              <li>Раствор аммиака в разбавлении 1:3.</li>
              <li>
                Стандартный раствор соли меди (сульфата меди) с концентрацией
                ионов Cu2+ равной 1 мг/мл.
              </li>
              <li>Концентрированная серная кислота (d = 1,84 г/см3).</li>
              <li>Мерные колбы на 25, 50, 100 мл, пипетки.</li>
            </ol>
            <h3>Порядок выполнения работы</h3>
            <p>
              Перед определением концентрации меди в растворе необходимо
              построить градуировочный график, пользуясь специальным
              растворителем и стандартным раствором соли меди. Приготовление
              раствора сравнения для построения градуировочного графика: 10 мл
              разбавленного (1:3) аммиака переносят в мерную колбу вместимостью
              50 мл, добавляют одну каплю концентрированной серной кислоты (пл.
              1,84 г/см3) и доводят дистиллированной водой до метки (нулевой
              раствор). Приготовление стандартного раствора соли меди: 3,927 г
              химически чистого сульфата меди CuSO45H2O переносят в мерную колбу
              вместимостью 1000 мл, растворяют, приливают 5 мл концентрированной
              серной кислоты (пл. 1,84 г/см3) и доводят водой до метки. В 1 мл
              этого раствора содержится 1 мг иона Cu2+. Построение
              градуировочного графика. В шесть мерных колб вместимостью по 25 мл
              отмерьте пипетками соответственно 5,0; 4,0; 2,5; 2,0; 1,5; и 1,0
              мл стандартного раствора соли меди. В каждую из колб прибавьте по
              5 мл разбавленного (1:3) раствора аммиака и доведите объемы
              дистиллированной водой до метки. Измерение оптической плотности D
              начните с раствора, имеющего наибольшую концентрацию меди. Для
              этого раствор из колбы налейте в кювету с рабочей шириной 10 мм, и
              измерьте адсорбционность раствора при красном светофильтре.
            </p>
            <table>
              <tr>
                <td>№ клобы</td>
                <td>Сi, мг</td>
                <td>D</td>
              </tr>
              <tr>
                <td>1</td>
                <td>10</td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>8</td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>5</td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>4</td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td>3</td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td>2</td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td>0</td>
                <td></td>
              </tr>
            </table>
            <p>
              По данным таблицы постройте калибровочный график, отложив по оси
              абсцисс – концентрации ионов Cu2+, а по оси ординат –
              соответствующие им оптические плотности. Ход определения меди в
              исследуемой сточной воде или в воде природных водных объектов: В
              мерную колбу вместимостью 25 мл возьмите для анализа немного
              испытуемого раствора, который может содержать от 0,01 до 0,5 мг
              Cu2+. Прибавьте в колбу 1 каплю концентрированной серной кислоты
              (пл. 1,84 г/см3), нейтрализуйте разбавленным (1:3) аммиаком,
              приливая его по каплям до появления мути. Прилейте еще 5 мл
              аммиака и доведите объем в колбе водой до метки. Раствор тщательно
              перемешайте, наполните им кювету с рабочей шириной 10 мм и
              измерьте обсорбционность его на правом барабане при красном
              светофильтре, т.е. при тех же условиях, при которых был получен
              градуировочный график. Зная D, найдите по градуировочному графику
              концентрацию иона Cu2+ в мг и вычислите содержание Cu2+ в 1 л по
              формуле (мг/л): Х=(С*10^(-3)*1000)/V где С – концентрация меди из
              калибровочного графика, мг; V – объем пробы сточной воды, взятой
              для анализа, мл.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Six;
