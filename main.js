function moreLv1() {
    document.querySelector('.modal-container').style.zIndex = '4'
    document.querySelector('.modal-container').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    document.querySelector('.window').style.display = 'block'
    document.querySelector('.close').style.display = 'block'
    document.querySelector('.text').innerHTML = `
   
  <li>  Здобуття вищої освіти на даному рівні вищої освіти передбачає успішне виконання особою освітньої програми,
   що є підставою для присудження відповідного <a style='color: mediumpurple'> ступеня </a> вищої освіти:<a style='color: mediumpurple'>  молодший бакалавр</a> .</li>
   <li> <a style='color: mediumpurple'> Молодший бакалавр </a>  - це освітній або освітньо-професійний ступінь, що здобувається на <a style='color: mediumpurple'>  початковому рівні (короткому циклі) </a>  вищої освіти і присуджується закладом вищої освіти у 
   результаті успішного виконання здобувачем вищої освіти освітньої програми, обсяг якої становить  <a style='color: mediumpurple'> 120 кредитів ЄКТС </a>. </li>
   <li > За даним ступенем встановлюється такий вид документу про вищу освіту :<a style='color: mediumpurple'> диплом молодшого бакалавра </a> . </li>`
}
function moreLv2() {
    document.querySelector('.modal-container').style.zIndex = '4'
    document.querySelector('.modal-container').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    document.querySelector('.window').style.display = 'block'
    document.querySelector('.close').style.display = 'block'
    document.querySelector('.text').innerHTML = `
    <li >  Здобуття вищої освіти на даному рівні вищої освіти передбачає успішне виконання особою освітньої програми,
     що є підставою для присудження відповідного<a style='color: mediumpurple'> ступеня </a> вищої освіти:<a style='color: mediumpurple'>   бакалавр</a>. </li>
     <li> <a style='color: mediumpurple'> Бакалавр </a>  - це освітній ступінь, що здобувається на <a style='color: mediumpurple'> першому рівні </a>  вищої освіти та присуджується закладом вищої освіти у результаті успішного виконання здобувачем
     вищої освіти освітньо-професійної програми, обсяг якої становить <a style='color: mediumpurple'> 180-240 кредитів ЄКТС </a>. </li>
     <li > За даним ступенем встановлюється такий вид документу про вищу освіту :<a style='color: mediumpurple'> диплом  бакалавра </a> . </li>
     `
}
function moreLv3() {
    document.querySelector('.modal-container').style.zIndex = '4'
    document.querySelector('.modal-container').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    document.querySelector('.window').style.display = 'block'
    document.querySelector('.close').style.display = 'block'
    document.querySelector('.text').innerHTML = `
    <li >  Здобуття вищої освіти на даному рівні вищої освіти передбачає успішне виконання особою освітньої програми,
     що є підставою для присудження відповідного <a style='color: mediumpurple'> ступеня </a> вищої освіти:  <a style='color: mediumpurple'>магістр</a>. </li>
    <li> <a style='color: mediumpurple'> Магістр </a>  - це освітній ступінь, що здобувається на <a style='color: mediumpurple'> другому рівні  </a>  вищої освіти та присуджується закладом вищої освіти (науковою установою) у 
    результаті успішного виконання здобувачем вищої освіти відповідної освітньої програми.
    Ступінь магістра здобувається за освітньо-професійною або за освітньо-науковою програмою. Обсяг освітньо-професійної програми підготовки магістра становить <a style='color: mediumpurple'>90-120 кредитів ЄКТС</a>,
     обсяг освітньо-наукової програми -<a style='color: mediumpurple'>120 кредитів ЄКТС  </a> .</li>
     <li > За даним ступенем встановлюється такий вид документу про вищу освіту :<a style='color: mediumpurple'> диплом магістра </a> . </li>`
}
function moreLv4() {
    document.querySelector('.modal-container').style.zIndex = '4'
    document.querySelector('.modal-container').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    document.querySelector('.window').style.display = 'block'
    document.querySelector('.close').style.display = 'block'
    document.querySelector('.text').innerHTML = `
    <li >  Здобуття вищої освіти на даному рівні вищої освіти передбачає успішне виконання особою освітньої програми,
     що є підставою для присудження відповідного <a style='color: mediumpurple'> ступеня </a> вищої освіти:  <a style='color: mediumpurple'> доктор філософії/доктор мистецтва </a>.</li>
     <li> <a style='color: mediumpurple'> Доктор філософії/ доктор мистецтва  </a>  - це освітній і водночас науковий ступінь, що здобувається на <a style='color: mediumpurple'>третьому рівні  </a>   вищої освіти на основі ступеня магістра.
     Обсяг освітньої складової освітньо-наукової програми підготовки доктора філософії/доктор мистецтва становить <a style='color: mediumpurple'> 30-60 кредитів ЄКТС </a> . </li>
     <li > За даним ступенем встановлюється такий вид документу про вищу освіту :<a style='color: mediumpurple'> диплом доктора філософії/доктора мистецтва </a> . </li>`
}

function closeWindow() {
    document.querySelector('.modal-container').style.zIndex = '-1'
    document.querySelector('.modal-container').style.backgroundColor = 'white'
    document.querySelector('.window').style.display = 'none'
    document.querySelector('.close').style.display = 'none'
    document.querySelector('.text').innerHTML = ''
}
function moreInst1() {
    document.querySelector('.modal-container').style.zIndex = '4'
    document.querySelector('.modal-container').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    document.querySelector('.window').style.display = 'block'
    document.querySelector('.close').style.display = 'block'
    document.querySelector('.text').innerHTML = `<a style='color: mediumpurple'> Університет </a> - багатогалузевий(класичний, технічний) або галузевий(профільний, технологічний, педагогічний, фізичного виховання і спорту, 
        гуманітарний, богословський / теологічний, медичний, економічний, юридичний, фармацевтичний, аграрний, мистецький, культурологічний тощо) заклад вищої освіти, що провадить інноваційну 
        освітню діяльність за <a style='color: mediumpurple'>різними ступенями вищої освіти(у тому числі доктора філософії)</a>, проводить фундаментальні та / або прикладні наукові дослідження, є провідним науковим і методичним 
        центром, має розвинуту інфраструктуру навчальних, наукових і науково - виробничих підрозділів, сприяє поширенню наукових знань та провадить культурно - просвітницьку діяльність`
}
function moreInst2() {
    document.querySelector('.modal-container').style.zIndex = '4'
    document.querySelector('.modal-container').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    document.querySelector('.window').style.display = 'block'
    document.querySelector('.close').style.display = 'block'
    document.querySelector('.text').innerHTML = `
    <a style='color: mediumpurple'> Aкадемія, інститут </a>- галузевий (профільний, технологічний, технічний, педагогічний, богословський/теологічний, медичний, економічний, юридичний, фармацевтичний, аграрний, мистецький, культурологічний тощо) заклад вищої освіти,
     що провадить інноваційну освітню діяльність, пов’язану з наданням вищої освіти на <a style='color: mediumpurple'> першому і другому рівнях </a> за однією чи кількома галузями знань, може здійснювати підготовку на <a style='color: mediumpurple'>  третьому і вищому науковому рівнях </a> вищої освіти за
      певними спеціальностями, проводить фундаментальні та/або прикладні наукові дослідження, є провідним науковим і методичним центром, має розвинуту інфраструктуру навчальних, наукових і науково-виробничих підрозділів, сприяє 
      поширенню наукових знань та провадить культурно-просвітницьку діяльність
    `
}
function moreInst3() {
    document.querySelector('.modal-container').style.zIndex = '4'
    document.querySelector('.modal-container').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    document.querySelector('.window').style.display = 'block'
    document.querySelector('.close').style.display = 'block'
    document.querySelector('.text').innerHTML = `
    <a style='color: mediumpurple'> Коледж </a>- заклад вищої освіти або структурний підрозділ університету, академії чи інституту, що провадить освітню діяльність, пов’язану із здобуттям ступеня  <a style='color: mediumpurple'> бакалавра та/або молодшого бакалавра</a>, проводить прикладні наукові дослідження та/або творчу мистецьку діяльність.
    Статус коледжу отримує заклад освіти (структурний підрозділ закладу освіти), в якому обсяг підготовки здобувачів вищої освіти ступеня бакалавра та/або молодшого бакалавра становить не менше 30 відсотків загального ліцензованого обсягу.
    `
}