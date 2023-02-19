import { DestBord } from "../../shared/components/destboard"
import Chart from 'react-apexcharts'
import {useEffect,useState} from "react"
import * as C from "./styles"
import { ApexOptions } from "apexcharts"
import { IPessoa, PessoaService } from "../../shared/services/pessoa/PessoaService"
import { ApiException } from "../../shared/services/ApiException"


export const Grafico = ()=>{
  const [pessoa,setPessoa ]= useState<IPessoa[]>([]);

  const state = {
    options: {
      chart: {
        foreColor: '#fff',
        id: 'apexchart-example',
        background:"#262D47"

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

  
   const options2:ApexOptions = {
      chart:{
        foreColor: '#fff',
      },
      plotOptions:{},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']


    }
 



  var options:ApexOptions = {
    series: [{
    data: [44, 55, 41, 64, 22, 43, 21]
  }, {
    data: [53, 32, 33, 52, 13, 44, 32]
  }],
  chart:{
    foreColor: '#fff',
    background:"#262D47"
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

  /* --- Consulta  pessoas na API---*/
  useEffect(() => {
    PessoaService.getAll()
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setPessoa(result);
        }
      });
  }, []);

    return(
        <DestBord ferramentaListagem={false}>
           <C.Container>
              <C.Itens>
                <C.Items stylo="#FF4560">505</C.Items>
                <C.Items stylo="#00E396">10000</C.Items>
                <C.Items stylo="#008FFB">{pessoa.length}</C.Items>
              </C.Itens>
              <C.Grafico>
                 <Chart options={state.options} series={state.series} type="bar" width={450} height={320} />
                 <Chart options={options2} series={options2.series} type="donut" width="380" />
                 <Chart options={options} series={options.series} type="bar" height={320} width={450} />
              </C.Grafico>
            </C.Container>
        </DestBord>

    )
}