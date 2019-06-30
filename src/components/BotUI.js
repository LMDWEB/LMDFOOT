import React, {Component} from 'react';
import Botui from 'botui-react';
import axios from 'axios';

class BotUI extends Component {
    componentDidMount() {
        let website = '';

        var post = function (name, website) {
            axios.post(process.env.DOMAIN, {
              name: name,
              link: website
            })
        
            // this.$router.push({ path: website })
        }
              
        var askWebsite = () => {
            this.botui.message.bot({
              delay: 500,
              content: 'Indiquer le nom de votre site : '
            })
            .then(() => {
              return this.botui.action.text({
                delay: 1000,
                action: {
                  size: 30,
                  icon: 'globe',
                  value: '',
                  placeholder: 'Nom du site'
                }
              })
            }).then((res) => {
                let name = removeAccents(res.value)
                let nameWebsite = name + '.lmdfoot.com'
            
                this.botui.message.bot({
                    delay: 500,
                    content: 'Voici votre nouveau site ' + nameWebsite
                })
        
                this.botui.message.bot({
                    delay: 500,
                    content: 'Souhaitez-vous confirmer le nom du site ?'
                })

                website = res.value // save website
        
                return this.botui.action.button({
                    delay: 1000,
                    action: [
                        {
                            icon: 'check',
                            text: 'Confirmer',
                            confirm: true,
                            name: name,
                            link: nameWebsite
                        },
                        {
                            icon: 'pencil',
                            text: 'Modifier',
                            value: 'edit'
                        }
                    ]
                })
            }).then((res) => {
                if (res.confirm) {
                    post(res.name, res.link);
                    end(res);
                } else {
                    askWebsite();
                }
            })
        }
        
        var end = (res) => {
            this.botui.message.bot({
                delay: 1000,
                content: 'Merci. Vous allons vous redigez vers votre nouveau site'
            })
        }
        
        var removeAccents = function (str) {
            var strAccents = str.split('')
            var strAccentsOut = []
            var strAccentsLen = strAccents.length
            var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'
            var accentsOut = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz'
        
            for (var y = 0; y < strAccentsLen; y++) {
              if (accents.indexOf(strAccents[y]) !== -1) {
                strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1)
              } else {
                strAccentsOut[y] = strAccents[y]
              }
            }
        
            strAccentsOut = strAccentsOut.join('')
            return strAccentsOut.split(' ').join('').toLowerCase()
        }
          
        this.botui.message.bot({
            content: "Nous allons créé avec vous votre nouveau site, vous êtes prêt ?",
            delay: 1000
        })
        .then(() => {
            return this.botui.action.button({
                addMessage: false, // so we could the website in message instead if 'Existing website'
                action: [
                    { text: 'Oui', value: 'new'},
                    { text: 'Non', value: 'exist'}
                ]
            });
        })
        .then((res) => {
            if (res.value === 'exist') {
                this.botui.message.human({
                    delay: 500,
                    content: website
                })
                end(res)
            } else {
                this.botui.message.human({
                    delay: 500,
                    content: res.text
                })
                askWebsite()
            }
        })
    }

    render(){
        return(
            <div>
                <div className={`blog-grid-area ${this.props.background}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Botui ref={ cmp => this.botui = cmp } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BotUI;