// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -265,
          "angle": 0,
          "width": 429.07,
          "height": 33.9,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "The following task is a hearing test.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "30",
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -50,
          "angle": 0,
          "width": 618.24,
          "height": 33.9,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "select the                       sound using your keyboard.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "30",
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 213,
          "angle": 0,
          "width": 303.24,
          "height": 31.64,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Press the spacebar to begin",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "28",
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 25,
          "angle": 0,
          "width": 2,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "rect",
          "left": 0,
          "top": 75,
          "angle": 0,
          "width": 609.78,
          "height": 179.66,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#dddddd"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 75,
          "angle": 0,
          "width": 569.14,
          "height": 120.05,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Press the \"1\" key if the first tone is quietest, \n\"2\" if the second tone is quietest, and \n\"3\" if the third tone is quietest",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": -200,
          "angle": 0,
          "width": 781.2,
          "height": 31.64,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Please use headphones and make sure your volume is set to 100%",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontSize": "28",
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": -100,
          "top": -50,
          "angle": 0,
          "width": 171.63,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "QUIETEST ",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontSize": 32,
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": -25,
          "top": -125,
          "angle": 0,
          "width": 576.17,
          "height": 78.11,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "You will hear three tones one after the other. \nAfter you hear all three tones, please",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "files": {},
      "parameters": {},
      "responses": {
        "keypress(Space)": "Continue"
      },
      "messageHandlers": {},
      "viewport": [
        800,
        600
      ],
      "title": "Instructions"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "": ""
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "100"
      },
      "responses": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.flow.Loop",
            "files": {
              "Correct1.wav": "embedded\u002F1d9e3e5cc54597fff396b72e2bac830fa68a7521688a3623f07e6d7ff1f2d864.wav",
              "Correct2.wav": "embedded\u002Fac5aed3bb17377f1bbac77578ade239bd5cb55c3220b6f6b6e40f9c749360d27.wav",
              "Correct 3.wav": "embedded\u002F68fc27cfd3352fb833913f430c48b5f117226b6a0c10be529234a530e6c5fcd8.wav",
              "Correct1'.wav": "embedded\u002F6b9ebaf6422f21b1b8ac4714cb83c194b5241fa68d8d2dad05de933e4d9caebc.wav",
              "Correct 2'.wav": "embedded\u002F71652a17870b59f57f1eccd2bcb2495569382531276485dca622ae9181679073.wav",
              "Correct 3'.wav": "embedded\u002F862279c3e2fe6a3171dba874d4739007ea0ecfff3f3beead3cbefa91e95c0218.wav"
            },
            "parameters": {},
            "templateParameters": [
              {
                "stim": "correct1_v1.wav",
                "r": "1"
              },
              {
                "stim": "correct1_v2.wav",
                "r": "1"
              },
              {
                "stim": "correct2_v1.wav",
                "r": "2"
              },
              {
                "stim": "correct2_v2.wav",
                "r": "2"
              },
              {
                "stim": "correct3_v1.wav",
                "r": "3"
              },
              {
                "stim": "correct3_v2.wav",
                "r": "3"
              }
            ],
            "sample": {
              "mode": "draw-replace",
              "n": "10"
            },
            "responses": {},
            "messageHandlers": {
              "run": function anonymous(
) {
this.state.numCorrect = 0;
}
            },
            "title": "Loop",
            "tardy": true,
            "shuffleGroups": [],
            "template": {
              "type": "lab.flow.Sequence",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "title": "Sequence",
              "tardy": true,
              "content": [
                {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 0,
                      "angle": 0,
                      "width": 712.29,
                      "height": 105.04,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "The sound will play shortly...\n\nRemember to select the quietest sound with the 1, 2, and 3 keys",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": "28",
                      "fontFamily": "serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    }
                  ],
                  "files": {},
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "viewport": [
                    800,
                    600
                  ],
                  "title": "Pause",
                  "timeout": "3000"
                },
                {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "image",
                      "left": -150,
                      "top": 14,
                      "angle": 0,
                      "width": 1132.8,
                      "height": 637.1999999999999,
                      "stroke": null,
                      "strokeWidth": 0,
                      "fill": "black",
                      "src": "${ this.files[\"audio-waveform-animation-simple-black-and-white-sound-wave-as-motion-background_vrgwksede__F0000.png\"] }"
                    }
                  ],
                  "files": {
                    "audio-waveform-animation-simple-black-and-white-sound-wave-as-motion-background_vrgwksede__F0000.png": "embedded\u002Fa0d371d94742a7a7bab1da56dfbd99584f63f1dc039fb2caa6e9b95911937c58.png",
                    "Correct1.wav": "embedded\u002F1d9e3e5cc54597fff396b72e2bac830fa68a7521688a3623f07e6d7ff1f2d864.wav",
                    "correct1_v1.wav": "embedded\u002F1d9e3e5cc54597fff396b72e2bac830fa68a7521688a3623f07e6d7ff1f2d864.wav",
                    "correct1_v2.wav": "embedded\u002F6b9ebaf6422f21b1b8ac4714cb83c194b5241fa68d8d2dad05de933e4d9caebc.wav",
                    "correct2_v1.wav": "embedded\u002F71652a17870b59f57f1eccd2bcb2495569382531276485dca622ae9181679073.wav",
                    "correct3_v1.wav": "embedded\u002F862279c3e2fe6a3171dba874d4739007ea0ecfff3f3beead3cbefa91e95c0218.wav",
                    "correct2_v2.wav": "embedded\u002Fac5aed3bb17377f1bbac77578ade239bd5cb55c3220b6f6b6e40f9c749360d27.wav",
                    "correct3_v2.wav": "embedded\u002F68fc27cfd3352fb833913f430c48b5f117226b6a0c10be529234a530e6c5fcd8.wav"
                  },
                  "parameters": {},
                  "responses": {},
                  "messageHandlers": {},
                  "viewport": [
                    800,
                    600
                  ],
                  "title": "Stim",
                  "timeline": [
                    {
                      "type": "sound",
                      "start": 0,
                      "stop": 4000,
                      "priority": 0,
                      "payload": {
                        "gain": 0.25,
                        "pan": 0,
                        "rampUp": 0,
                        "rampDown": 0,
                        "src": "${ this.files[this.parameters.stim] }"
                      }
                    }
                  ],
                  "correctResponse": "${parameters.r}",
                  "timeout": "4000"
                },
                {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "image",
                      "left": -150,
                      "top": 14,
                      "angle": 0,
                      "width": 1132.8,
                      "height": 637.1999999999999,
                      "stroke": null,
                      "strokeWidth": 0,
                      "fill": "black",
                      "src": "${ this.files[\"audio-waveform-animation-simple-black-and-white-sound-wave-as-motion-background_vrgwksede__F0000.png\"] }"
                    }
                  ],
                  "files": {
                    "audio-waveform-animation-simple-black-and-white-sound-wave-as-motion-background_vrgwksede__F0000.png": "embedded\u002Fa0d371d94742a7a7bab1da56dfbd99584f63f1dc039fb2caa6e9b95911937c58.png",
                    "Correct1.wav": "embedded\u002F1d9e3e5cc54597fff396b72e2bac830fa68a7521688a3623f07e6d7ff1f2d864.wav",
                    "correct1_v1.wav": "embedded\u002F1d9e3e5cc54597fff396b72e2bac830fa68a7521688a3623f07e6d7ff1f2d864.wav",
                    "correct1_v2.wav": "embedded\u002F6b9ebaf6422f21b1b8ac4714cb83c194b5241fa68d8d2dad05de933e4d9caebc.wav",
                    "correct2_v1.wav": "embedded\u002F71652a17870b59f57f1eccd2bcb2495569382531276485dca622ae9181679073.wav",
                    "correct3_v1.wav": "embedded\u002F862279c3e2fe6a3171dba874d4739007ea0ecfff3f3beead3cbefa91e95c0218.wav",
                    "correct2_v2.wav": "embedded\u002Fac5aed3bb17377f1bbac77578ade239bd5cb55c3220b6f6b6e40f9c749360d27.wav",
                    "correct3_v2.wav": "embedded\u002F68fc27cfd3352fb833913f430c48b5f117226b6a0c10be529234a530e6c5fcd8.wav"
                  },
                  "parameters": {},
                  "responses": {
                    "keypress(1)": "1",
                    "keypress(2)": "2",
                    "keypress(3)": "3"
                  },
                  "messageHandlers": {
                    "after:end": function anonymous(
) {
this.state.numCorrect += this.state.correct ? 1 : 0;

}
                  },
                  "viewport": [
                    800,
                    600
                  ],
                  "title": "Response",
                  "timeline": [],
                  "correctResponse": "${parameters.r}"
                }
              ]
            }
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -15,
                "top": -250,
                "angle": 0,
                "width": 189.7,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Let's try again.",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 50,
                "angle": 0,
                "width": 671.23,
                "height": 539.51,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Make sure you are using headphones and \nyour volume is set to 100%.\n\nListen to all threee tones and \nselect the QUIETEST sound with keys 1, 2 and 3.\n\n\nPress the '1' key if the first sound is the quietest,\nPress the '2' key if the first sound is the quietest,\nPress the '3' key if the first sound is the quietest,\n\n\n",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 250,
                "angle": 0,
                "width": 331.3,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Press SPACE to continue.",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "files": {},
            "parameters": {},
            "responses": {
              "keypress(Space)": "continue"
            },
            "messageHandlers": {
              "run": function anonymous(
) {
if (this.state.numCorrect >= 8) {
  this.parent.parent.end();
}
}
            },
            "viewport": [
              800,
              600
            ],
            "title": "Screen"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 15,
          "top": 0,
          "angle": 0,
          "width": 404.39,
          "height": 162,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Thank you!\n\nPress any key to finish the task \nand return to the survey.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "files": {},
      "parameters": {},
      "responses": {
        "keypress": "continue"
      },
      "messageHandlers": {},
      "viewport": [
        800,
        600
      ],
      "title": "END!"
    }
  ]
})

// Let's go!
study.run()