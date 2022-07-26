
import styled from "styled-components";

interface IChunkRegulator {
  spanId: string;
  gap: string;
  alinhado: boolean;
  nDeColunas: string;
  efeito3D: boolean;
}

export const ChunkRegulator = styled.div(({ spanId, gap, alinhado, nDeColunas, efeito3D }: IChunkRegulator) => (`
  
   display: grid;
   grid-template-columns: repeat(${nDeColunas}, 1fr);
   grid-template-rows: repeat(5, 1fr);
   grid-column-gap: ${gap}rem;
   grid-row-gap: .6rem;
   ${!alinhado
    ? 'display: flex;  align-items: flex-start; flex-wrap: wrap; gap: ${gap}rem;'
    : ''
  }
   span{
     ${alinhado
    ? 'margin: auto; width: fit-content;'
    : ''
  }
     ${efeito3D
    ? 'border-bottom: 3px solid var(--shadow-sr); border-right: 2px solid var(--shadow-sr);'
    : 'border: 0;'
  }
   }
   .${spanId}{
     display: inline-block;
     position: relative;
     background-color: var(--emphasis-sr);
     z-index: 2;
     ::after{
       content: '';
       background-color: red;
       position: absolute;
       width: .2rem;
       height: .2rem;
       border: 4px solid red;
       border-radius: 50%;
       border-bottom: 0;
       left: calc(50% - ((.2rem + 8px) / 2));
       bottom: -.4rem;
     }
   }  
 `))