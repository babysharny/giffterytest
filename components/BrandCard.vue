<template lang="pug">
  .card
    .card-image
      figure.image.is-4by3
        img(src='https://bulma.io/images/placeholders/1280x960.png', alt='Placeholder image')
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(src='https://bulma.io/images/placeholders/96x96.png', alt='Placeholder image')
        .media-content
          p.title.is-4 John Smith
          p.subtitle.is-6 @johnsmith
      .content
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        | Phasellus nec iaculis mauris.
        a @bulmaio
        | .
        a(href='#') #css
        a(href='#') #responsive
        br
        time(datetime='2016-1-1') 11:09 PM - 1 Jan 2016
</template>
