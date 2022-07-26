import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { ChunkRegulator } from './styled'
import { Notebook, Pause, Play, SkipBack, Stop } from 'phosphor-react'
export function SpeedReader() {

  const initialText = `Olhou para o despertador, que fazia tique-taque na cômoda. Pai do Céu! — pensou. Eram seis e meia e os ponteiros moviam-se em silêncio, até passava da meia hora, era quase um quarto para as sete. O despertador não teria tocado? Da cama, via-se que estava corretamente regulado para as quatro; claro que devia ter tocado. Sim, mas seria possível dormir sossegadamente no meio daquele barulho que trespassava os ouvidos? Bem, ele não tinha dormido sossegadamente; no entanto, aparentemente, se assim era, ainda devia ter sentido mais o barulho. Mas que faria agora? o próximo trem saía às sete; para o apanhar tinha de correr como um doido, as amostras ainda não estavam embrulhadas e ele próprio não se sentia particularmente fresco e ativo. E, mesmo que apanhasse o trem, não conseguiria evitar uma reprimenda do chefe, visto que o porteiro da firma havia de ter esperado o trem das cinco e há muito teria comunicado a sua ausência. O porteiro era um instrumento do patrão, invertebrado e idiota. Bem, suponhamos que dizia que estava doente? Mas isso seria muito desagradável e pareceria suspeito, porque, durante cinco anos de emprego, nunca tinha estado doente. O próprio patrão certamente iria lá a casa com o médico da Previdência, repreenderia os pais pela preguiça do filho e poria de parte todas as desculpas, recorrendo ao médico da Previdência, que, evidentemente, considerava toda a humanidade um bando de falsos doentes perfeitamente saudáveis. E enganaria assim tanto desta vez? Efetivamente, Gregório sentia-se bastante bem, à parte uma sonolência que era perfeitamente supérflua depois de um tão longo sono, e sentia-se mesmo esfomeado.`
  const [textInput, setTextInput] = useState(initialText)
  const [textOutput, setTextOutput] = useState<IObjListTextProps[]>([])
  const [lendo, setLendo] = useState(false)
  const [maxCharacterNumber, setMaxCharacterNumber] = useState(12)
  const [spanNumber, setSpanNumber] = useState(-1)
  const [spanManuallyChanged, setSpanManuallyChanged] = useState(false)
  const [palavrasPorMinuto, setPalavrasPorMinuto] = useState<number>(220)
  const [quantidadeDePalavrasNoTexto, setQuantidadeDePalavrasNoTexto] = useState<number>(1)
  const [quantidadeDePedacosNoTexto, setQuantidadeDePedacosNoTexto] = useState<number>(1)
  const [intervalo, setIntervalo] = useState<number>(1)
  const [inAction, setInAction] = useState('pause')
  const [intervalID, setInterID] = useState()
  const [gap, setGap] = useState('.75')
  const [alinhado, setAlinhado] = useState(false)
  const [nDeColunas, setNDeColunas] = useState('4')
  const [efeito3D, setEfeito3D] = useState(true)

  // const [countInterval, setCountInterval] = useState
  useEffect(() => {

    let count = spanNumber
    let qpt = quantidadeDePedacosNoTexto
    let intervalId = setInterval(() => {
      switch (inAction) {
        case 'play':
          setSpanNumber(0)
          setInAction('continue')
          break;
        case 'pause':
          clearInterval(intervalId)
          break;
        case 'continue':
          if (count >= qpt) {
            setSpanNumber(0)
            setInAction('pause')
            break;
          }
          count++
          setSpanNumber(count)
          break;
        case 'stop':
          setSpanNumber(0)
          clearInterval(intervalId)
          break;
        default:
          break;
      }
    }, intervalo * 1000);
    // setInterID(intervalId)

    return () => {
      clearInterval(intervalId)

    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inAction, spanManuallyChanged]);


  interface IIntervaloProps {
    wpm: number,
    textWordLength: number,
    textChunksLength: number,
  }

  interface IObjListTextProps {

    key: number;
    className: string;
    childish: string;

  }

  function textJsxFormatation(
    textList: string[]): { key: number; className: string; childish: string; }[] {
    let previewsWord = ''
    let actualText = ''
    let idCount = 0
    function transformRule(word: string) {
      if (previewsWord.length + word.length > maxCharacterNumber) {
        idCount++
        actualText = previewsWord
        previewsWord = word

        return ({
          key: idCount,
          className: 'i' + idCount,
          childish: ' ' + actualText
        }
        )

      } else {
        previewsWord = previewsWord + ' ' + word
      }
    }
    let jsxPrepared: { key: number; className: string; childish: string; }[] = []
    textList.forEach((word) => {
      const tr = transformRule(word)
      if (tr !== undefined) {
        jsxPrepared.push(tr)
      }
    })

    return jsxPrepared
  }

  function calculaIntervalo(quantPalavras: number, quantPedacos: number) {
    const tempoTotal = quantPalavras / (palavrasPorMinuto / 60)
    const intervalo = tempoTotal / quantPedacos
    return intervalo
  }

  function handlePlay() {
    const textInputList = textInput.split(' ')
    const novaQuantidadePalavras = textInputList.length
    setQuantidadeDePalavrasNoTexto(novaQuantidadePalavras)
    const coxinha = textJsxFormatation(textInputList)
    const novaQuantidadePedacos = coxinha.length
    setQuantidadeDePedacosNoTexto(novaQuantidadePedacos)
    const novoIntervalo = calculaIntervalo(novaQuantidadePalavras, novaQuantidadePedacos)
    setIntervalo(novoIntervalo)
    setTextOutput(coxinha)
    setLendo(true)
    // dispararContador({ wpm: palavrasPorMinuto, textWordLength: novaQuantidadePalavras, textChunksLength: novaQuantidadePedacos })
    setInAction('play')
  }
  function handleBack() {
    setInAction('stop')
    setLendo(false)
  }

  function handleChunkSizeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const option = event.target.value
    let size = 1
    switch (option) {
      case 'unico':
        size = 1
        break;
      case 'pequeno':
        size = 12
        break;
      case 'medio':
        size = 18
        break;
      case 'grande':
        size = 24
        break;
      default:
    }
    setMaxCharacterNumber(size)
  }

  function handleRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const ppm = parseInt(event.target.value);
    setPalavrasPorMinuto(ppm)
  }

  function handleTimeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const pedacoDaVez = parseInt(event.target.value);
    setSpanNumber(pedacoDaVez)
    setSpanManuallyChanged(!spanManuallyChanged)
  }

  function handleColumnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const nDeColunas = event.target.value;
    setNDeColunas(nDeColunas)
  }

  function handleGapChange(event: React.ChangeEvent<HTMLInputElement>) {
    const tamanhoDoGap = event.target.value;
    setGap(tamanhoDoGap)
  }

  function handleSpanClick(id: number) {
    setSpanNumber(id)
    setSpanManuallyChanged(!spanManuallyChanged)
  }

  function handleSkipBack() {
    setSpanNumber(0)
    setInAction('stop')
  }
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Speed Reader</h1>
      <p className={styles.description}>Treine para ler mais rápido</p>
      <section>
        <div className={styles.readingBox}>
          <div
            className={!lendo ? styles.initialInputOn : styles.initialInputOff}>
            <textarea
              spellCheck={false}
              placeholder='Cole algum texto aqui e comece a treinar com ele'
              onChange={(event) => { setTextInput(event.target.value) }}
              value={textInput}
            />

          </div>

          <div className={lendo ? styles.textScreenOn : styles.textScreenOff}>
            <ChunkRegulator
              spanId={'i' + spanNumber}
              gap={gap}
              alinhado={alinhado}
              nDeColunas={nDeColunas}
              efeito3D={efeito3D}
            >
              {textOutput.map((span) => {
                return <span key={span.key} className={span.className}>{span.childish}</span>
              })}

            </ChunkRegulator>
          </div>
        </div>

        <div className={styles.bottonContainer}>
          <div
            className={!lendo ? styles.initialInputOn : styles.initialInputOff}>
            <div className="ppm-slider">
              <p>{palavrasPorMinuto} palavras por minuto</p>
              <input
                type="range"
                min="60"
                max="1500"
                value={palavrasPorMinuto}
                onChange={handleRangeChange}
              />
            </div>
            <select name="select" defaultValue={'pequeno'} onChange={handleChunkSizeChange}>
              <option value="unico">uma palavra</option>
              <option value="pequeno">pequeno</option>
              <option value="medio">médio</option>
              <option value="grande">grande</option>
            </select>
            <Play
              onClick={handlePlay}
            >Play</Play>
          </div>
          <div className={lendo ? styles.textScreenOn : styles.textScreenOff}>
            <Notebook
              className={styles.resetButton}
              onClick={() => handleBack()}
            />
            {inAction === 'continue'
              ?
              <Pause onClick={() => setInAction('pause')}>pause</Pause>
              :
              <Play onClick={() => setInAction('continue')}>continue</Play>
            }
            <div>
              <p>efeito 3D
                <input type="checkbox" name="efeito3D" id="" checked={efeito3D} onChange={e => setEfeito3D(e.target.checked)} />
              </p>
            </div>
            <br />
            <p>parte focada</p>
            <SkipBack
              onClick={handleSkipBack}
            />
            <input
              type="range"
              min="1"
              max={quantidadeDePedacosNoTexto.toString()}
              value={spanNumber}
              onChange={handleTimeChange}
            />
            <br />
            <br />

            <button onClick={() => setAlinhado(!alinhado)}>
              {alinhado ?
                <span>normalizar</span> :
                <span>alinhar</span>
              }
            </button>
            <br />

            <br />


            {alinhado ?
              <>
                <p>number de colunas</p>
                <input
                  type="range"
                  min="1"
                  max='6'
                  value={nDeColunas}
                  onChange={handleColumnChange}
                />
              </>
              :
              <>
                <p> tamanho do gap</p>
                <input
                  type="range"
                  min="0"
                  max='2'
                  step='0.25'
                  value={gap}
                  onChange={handleGapChange}
                />
              </>
            }
          </div>

        </div>
      </section>
    </main >
  )
}

