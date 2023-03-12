import { DestBord } from "../../shared/components/destboard"
import Chart from 'react-apexcharts'
import { useEffect, useState } from "react"
import * as C from "./styles"
import { ApexOptions } from "apexcharts"
import { PessoaService } from "../../shared/services/pessoa/PessoaService"
import { ApiException } from "../../shared/services/ApiException"
import ReactApexChart from "react-apexcharts"
import { IPessoa } from "../../shared/types/Pessoa"
import { UsuarioService } from "../../shared/services/usuario/usuarioService"
import { IUsuarioData } from "../../shared/types/Usuario"


export const Grafico = () => {
  const [pessoa, setPessoa] = useState<IPessoa[]>([]);
  const [usuario, setUsuario] = useState<IUsuarioData>()

  const state = {
    options: {
      chart: {
        foreColor: '#fff',
        id: 'apexchart-example',
        background: "#262D47"

      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [{
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }]
  }


  const options2: ApexOptions = {
    chart: {
      foreColor: '#fff',
    },
    plotOptions: {},
    series: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E']


  }




  var options: ApexOptions = {
    series: [{
      data: [44, 55, 41, 64, 22, 43, 21]
    }, {
      data: [53, 32, 33, 52, 13, 44, 32]
    }],
    chart: {
      foreColor: '#fff',
      background: "#262D47"
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    }
  };

  let state2 = {
    series: [{
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: 'TEAM C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
      ],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        title: {
          text: 'Points',
        },
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;

          }
        }
      }
    },


  };




  useEffect(() => {

    /* --- Consulta  pessoas na API---*/
    PessoaService.getAll()
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setPessoa(result.data);
        }
      });

    /* --- Consulta  usuario na API---*/
    UsuarioService.getAll()
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message)
        } else {
          setUsuario(result)

        }

      })
  }, []);

  return (
    <DestBord ferramentaListagem={false}>
      <C.Container>
        <C.Itens>
          <C.Items stylo="#FF4560">505</C.Items>
          <C.Items stylo="#00E396">{usuario?.data.length}</C.Items>
          <C.Items stylo="#008FFB">{pessoa.length}</C.Items>
        </C.Itens>
        <C.Grafico>
          <Chart options={state.options} series={state.series} type="bar" width={600} height={350} />
          <Chart options={options2} series={options2.series} type="donut" width="380" />
          <ReactApexChart options={state2} series={state2.series} type="line" height={400} width={600} />
        </C.Grafico>
      </C.Container>
    </DestBord>

  )
}