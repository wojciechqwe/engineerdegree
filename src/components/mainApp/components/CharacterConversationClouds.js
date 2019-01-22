import React, { Component } from 'react';

class CharacterConversationClouds extends Component {
  paintings = [
    {
      points: [
        { questions: [0, 1, 2], id: 0 },
        { questions: [5, 3, 4], id: 1 },
        { questions: [5, 6], id: 2 },
        { questions: [7, 8], id: 3 },
        { questions: [9, 10], id: 4 }
      ],
      questions: [
        {
          question: ["Dlaczego wybrałeś takie kolory?"],
          answer: ["Hmm... W sumie nie miało to większego znaczenia.", "Jedyne co chcałem pokazać to zawód całej sytuacji..."],
          id: 0,
          endpoint: 1
        },
        {
          question: ["O czym myślałeś tworząc?"],
          answer: ["O moim jamniku.", "Jest taki długi i mięsisty."],
          id: 1,
          endpoint: 0
        },
        {
          question: ["Czy ten obraz nie zbyt ciemny?"],
          answer: ["Nie wydaje mi się...", "Tak czułem - tak namalowałem"],
          id: 2,
          endpoint: 2
        },
        {
          question: ["Zawód miłosny?"],
          answer: ["Hmm.", "Może."],
          id: 3,
          endpoint: 3
        },
        {
          question: ["A co z tymi kształtami w prawym dolnym rogu?"],
          answer: ["A to w sumie ciekawa sprawa.", "Pod spodem są inne rzeczy które bardzo chciałem zamalować?"],
          id: 4,
          endpoint: 4
        },
        {
          question: ["Tak czułeś?"],
          answer: ["Hmm.", "TO był dosyć ciężki czas w moim życiu.", "Nie chciałbym o tym rozmawiać."],
          id: 5,
          endpoint: 0
        },
        {
          question: ["Problemy w pracy?"],
          answer: ["Nie.", "Akurat na finansową część mojego życia nie mogę narzekać.", "Nawet trochę nie powinienem."],
          id: 6,
          endpoint: 0
        },
        {
          question: ["Jedna kobieta potrafiła Cię tak złamać?"],
          answer: ["Nie jedna.", "Jedyna."],
          id: 7,
          endpoint: 0
        },
        {
          question: ["Blefujesz! Za tobą kobiety muszą się uganiać..."],
          answer: ["Znasz się jak świnia na gwazdach."],
          id: 8,
          endpoint: 0
        },
        {
          question: ["Zamaować?"],
          answer: ["Farba i jazda"],
          id: 9,
          endpoint: 0
        },
        {
          question: ["Co tam jest?"],
          answer: ["Samochód.", "Renault Kangoo 4x4 1.3"],
          id: 10,
          endpoint: 0
        },
      ]
    },
    {
      points: [
        { questions: [0, 1,], id: 0 },
        { questions: [5, 3, 4], id: 1 },
        { questions: [5, 6], id: 2 },
        { questions: [7, 8], id: 3 },
        { questions: [9, 10], id: 4 }
      ],
      questions: [
        {
          question: ["Dlaczego wybrałeś takie kolory?"],
          answer: ["Hmm... W sumie nie miało to większego znaczenia.", "Jedyne co chcałem pokazać to zawód całej sytuacji..."],
          id: 0,
          endpoint: 1
        },
        {
          question: ["O czym myślałeś tworząc?"],
          answer: ["O moim jamniku.", "Jest taki długi i mięsisty."],
          id: 1,
          endpoint: 0
        },
        {
          question: ["Czy ten obraz nie zbyt ciemny?"],
          answer: ["Nie wydaje mi się...", "Tak czułem - tak namalowałem"],
          id: 2,
          endpoint: 2
        },
        {
          question: ["Zawód miłosny?"],
          answer: ["Hmm.", "Może."],
          id: 3,
          endpoint: 3
        },
        {
          question: ["A co z tymi kształtami w prawym dolnym rogu?"],
          answer: ["A to w sumie ciekawa sprawa.", "Pod spodem są inne rzeczy które bardzo chciałem zamalować?"],
          id: 4,
          endpoint: 4
        },
        {
          question: ["Tak czułeś?"],
          answer: ["Hmm.", "TO był dosyć ciężki czas w moim życiu.", "Nie chciałbym o tym rozmawiać."],
          id: 5,
          endpoint: 0
        },
        {
          question: ["Problemy w pracy?"],
          answer: ["Nie.", "Akurat na finansową część mojego życia nie mogę narzekać.", "Nawet trochę nie powinienem."],
          id: 6,
          endpoint: 0
        },
        {
          question: ["Jedna kobieta potrafiła Cię tak złamać?"],
          answer: ["Nie jedna.", "Jedyna."],
          id: 7,
          endpoint: 0
        },
        {
          question: ["Blefujesz! Za tobą kobiety muszą się uganiać..."],
          answer: ["Znasz się jak świnia na gwazdach."],
          id: 8,
          endpoint: 0
        },
        {
          question: ["Zamaować?"],
          answer: ["Farba i jazda"],
          id: 9,
          endpoint: 0
        },
        {
          question: ["Co tam jest?"],
          answer: ["Samochód.", "Renault Kangoo 4x4 1.3"],
          id: 10,
          endpoint: 0
        },
      ]
    },
    {
      points: [
        { questions: [2], id: 0 },
        { questions: [5, 3, 4], id: 1 },
        { questions: [5, 6], id: 2 },
        { questions: [7, 8], id: 3 },
        { questions: [9, 10], id: 4 }
      ],
      questions: [
        {
          question: ["Dlaczego wybrałeś takie kolory?"],
          answer: ["Hmm... W sumie nie miało to większego znaczenia.", "Jedyne co chcałem pokazać to zawód całej sytuacji..."],
          id: 0,
          endpoint: 1
        },
        {
          question: ["O czym myślałeś tworząc?"],
          answer: ["O moim jamniku.", "Jest taki długi i mięsisty."],
          id: 1,
          endpoint: 0
        },
        {
          question: ["Czy ten obraz nie zbyt ciemny?"],
          answer: ["Nie wydaje mi się...", "Tak czułem - tak namalowałem"],
          id: 2,
          endpoint: 2
        },
        {
          question: ["Zawód miłosny?"],
          answer: ["Hmm.", "Może."],
          id: 3,
          endpoint: 3
        },
        {
          question: ["A co z tymi kształtami w prawym dolnym rogu?"],
          answer: ["A to w sumie ciekawa sprawa.", "Pod spodem są inne rzeczy które bardzo chciałem zamalować?"],
          id: 4,
          endpoint: 4
        },
        {
          question: ["Tak czułeś?"],
          answer: ["Hmm.", "TO był dosyć ciężki czas w moim życiu.", "Nie chciałbym o tym rozmawiać."],
          id: 5,
          endpoint: 0
        },
        {
          question: ["Problemy w pracy?"],
          answer: ["Nie.", "Akurat na finansową część mojego życia nie mogę narzekać.", "Nawet trochę nie powinienem."],
          id: 6,
          endpoint: 0
        },
        {
          question: ["Jedna kobieta potrafiła Cię tak złamać?"],
          answer: ["Nie jedna.", "Jedyna."],
          id: 7,
          endpoint: 0
        },
        {
          question: ["Blefujesz! Za tobą kobiety muszą się uganiać..."],
          answer: ["Znasz się jak świnia na gwazdach."],
          id: 8,
          endpoint: 0
        },
        {
          question: ["Zamaować?"],
          answer: ["Farba i jazda"],
          id: 9,
          endpoint: 0
        },
        {
          question: ["Co tam jest?"],
          answer: ["Samochód.", "Renault Kangoo 4x4 1.3"],
          id: 10,
          endpoint: 0
        },
      ]
    },
    {
      points: [
        { questions: [0, 1, 2], id: 0 },
        { questions: [5, 3, 4], id: 1 },
        { questions: [5, 6], id: 2 },
        { questions: [7, 8], id: 3 },
        { questions: [9, 10], id: 4 }
      ],
      questions: [
        {
          question: ["Dlaczego wybrałeś takie kolory?"],
          answer: ["Hmm... W sumie nie miało to większego znaczenia.", "Jedyne co chcałem pokazać to zawód całej sytuacji..."],
          id: 0,
          endpoint: 1
        },
        {
          question: ["O czym myślałeś tworząc?"],
          answer: ["O moim jamniku.", "Jest taki długi i mięsisty."],
          id: 1,
          endpoint: 0
        },
        {
          question: ["Czy ten obraz nie zbyt ciemny?"],
          answer: ["Nie wydaje mi się...", "Tak czułem - tak namalowałem"],
          id: 2,
          endpoint: 2
        },
        {
          question: ["Zawód miłosny?"],
          answer: ["Hmm.", "Może."],
          id: 3,
          endpoint: 3
        },
        {
          question: ["A co z tymi kształtami w prawym dolnym rogu?"],
          answer: ["A to w sumie ciekawa sprawa.", "Pod spodem są inne rzeczy które bardzo chciałem zamalować?"],
          id: 4,
          endpoint: 4
        },
        {
          question: ["Tak czułeś?"],
          answer: ["Hmm.", "TO był dosyć ciężki czas w moim życiu.", "Nie chciałbym o tym rozmawiać."],
          id: 5,
          endpoint: 0
        },
        {
          question: ["Problemy w pracy?"],
          answer: ["Nie.", "Akurat na finansową część mojego życia nie mogę narzekać.", "Nawet trochę nie powinienem."],
          id: 6,
          endpoint: 0
        },
        {
          question: ["Jedna kobieta potrafiła Cię tak złamać?"],
          answer: ["Nie jedna.", "Jedyna."],
          id: 7,
          endpoint: 0
        },
        {
          question: ["Blefujesz! Za tobą kobiety muszą się uganiać..."],
          answer: ["Znasz się jak świnia na gwazdach."],
          id: 8,
          endpoint: 0
        },
        {
          question: ["Zamaować?"],
          answer: ["Farba i jazda"],
          id: 9,
          endpoint: 0
        },
        {
          question: ["Co tam jest?"],
          answer: ["Samochód.", "Renault Kangoo 4x4 1.3"],
          id: 10,
          endpoint: 0
        },
      ]
    },
    {
      points: [
        { questions: [0, 1, 2], id: 0 },
        { questions: [5, 3, 4], id: 1 },
        { questions: [5, 6], id: 2 },
        { questions: [7, 8], id: 3 },
        { questions: [9, 10], id: 4 }
      ],
      questions: [
        {
          question: ["Dlaczego wybrałeś takie kolory?"],
          answer: ["Hmm... W sumie nie miało to większego znaczenia.", "Jedyne co chcałem pokazać to zawód całej sytuacji..."],
          id: 0,
          endpoint: 1
        },
        {
          question: ["O czym myślałeś tworząc?"],
          answer: ["O moim jamniku.", "Jest taki długi i mięsisty."],
          id: 1,
          endpoint: 0
        },
        {
          question: ["Czy ten obraz nie zbyt ciemny?"],
          answer: ["Nie wydaje mi się...", "Tak czułem - tak namalowałem"],
          id: 2,
          endpoint: 2
        },
        {
          question: ["Zawód miłosny?"],
          answer: ["Hmm.", "Może."],
          id: 3,
          endpoint: 3
        },
        {
          question: ["A co z tymi kształtami w prawym dolnym rogu?"],
          answer: ["A to w sumie ciekawa sprawa.", "Pod spodem są inne rzeczy które bardzo chciałem zamalować?"],
          id: 4,
          endpoint: 4
        },
        {
          question: ["Tak czułeś?"],
          answer: ["Hmm.", "TO był dosyć ciężki czas w moim życiu.", "Nie chciałbym o tym rozmawiać."],
          id: 5,
          endpoint: 0
        },
        {
          question: ["Problemy w pracy?"],
          answer: ["Nie.", "Akurat na finansową część mojego życia nie mogę narzekać.", "Nawet trochę nie powinienem."],
          id: 6,
          endpoint: 0
        },
        {
          question: ["Jedna kobieta potrafiła Cię tak złamać?"],
          answer: ["Nie jedna.", "Jedyna."],
          id: 7,
          endpoint: 0
        },
        {
          question: ["Blefujesz! Za tobą kobiety muszą się uganiać..."],
          answer: ["Znasz się jak świnia na gwazdach."],
          id: 8,
          endpoint: 0
        },
        {
          question: ["Zamaować?"],
          answer: ["Farba i jazda"],
          id: 9,
          endpoint: 0
        },
        {
          question: ["Co tam jest?"],
          answer: ["Samochód.", "Renault Kangoo 4x4 1.3"],
          id: 10,
          endpoint: 0
        },
      ]
    }
  ]
  paintingNames = [
    'paint0',
    'paint1',
    'paint2',
    'paint3',
    'paint4'
  ]

  state = {
    currentPainting: this.painting1,
    currentPoint: 0,
    showQuestions: true,
    currentAnswer: "",
    currentPaintgName: ""
  }

  componentDidMount() {
  }

  timer(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  async readAnswer(item) {
    console.log(item.answer);
    this.setState({ currentPoint: item.endpoint, showQuestions: false });
    for (let answer of item.answer) {
      this.setState({ currentAnswer: answer });
      await this.timer(answer.length * 30 + 1800);
    }
    this.setState({ showQuestions: true, currentAnswer: "" });
  }

  showQuestions(paintings) {
    if (paintings[this.props.currentPainting]) {
      const point = paintings[this.props.currentPainting].points[this.state.currentPoint];
      if (this.state.showQuestions && this.props.characterStyle.percentageTop < 0.65
      ) {
        let renderedQuestions = [];
        for (let questionID of point.questions) {
          renderedQuestions.push(
            <div key={this.paintings[this.props.currentPainting].questions[questionID].id} style={this.styles.conversationCloud} onClick={() => { this.readAnswer(this.paintings[this.props.currentPainting].questions[questionID]) }}>
              {this.paintings[this.props.currentPainting].questions[questionID].question[0]}
            </div>
          )
        }
        return renderedQuestions;
      }
    }
  }

  render() {
    let style = {
      character: {
        position: "absolute",
        zIndex: 200,
        bottom: "calc(" + this.props.characterStyle.top + "px - 15vh)",
        left: "calc(" + this.props.characterStyle.left + "px + 15vh)"
      },
    }
    return (
      <div>
        <div style={style.character}>
          {this.showQuestions(this.paintings)}
        </div>
        <div style={this.styles.subtitles}>
          {this.state.currentAnswer}
        </div>
      </div>
    );
  }

  styles = {
    conversationCloud: {
      position: "relative",
      borderRadius: 10,
      padding: 10,
      marginTop: 10,
      backgroundColor: "#444",
      color: "#fff",
      cursor: "pointer"
    },
    subtitles: {
      position: "fixed",
      bottom: 20,
      width: "100vw",
      textAlign: "center",
      color: "#000",
      zIndex: 10000
    }
  }
}

export default CharacterConversationClouds;
