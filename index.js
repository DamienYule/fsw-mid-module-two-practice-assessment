document.addEventListener('DOMContentLoaded', () => {


    //select dom location for manipultion 
    const displayStory = document.querySelector('#emoji-story')
    const lengthNum = document.querySelector("#story-length-input")
    const generateStoryBtn = document.querySelector('#generate-story-btn')
    const input = document.getElementById('description-input')
    const inputBtn = document.getElementById('submit-description-btn')
    const ul = document.querySelector('ul')
    const emojis = [
        '😀', '😆', '😅', '🤣', '🙃', '😍', '😡', '🥶', '😱', '👻',
        '👾', '😻', '💋', '👅', '🧵', '👠', '🥾', '👑', '🎓', '🐔',
        '🐧', '🦄', '🦇', '🌲', '🎄', '🌊', '🍓', '🍍', '🥯', '🌭',
        '🍕', '🍣', '🥡', '🤸', '🎯', '🧨', '🔮', '💉', '🦠', '❤️',
        '🧡', '💛', '💚', '💙', '💜', '☢️', '🚫', '💯', '🔱', '🎊'
    ]
    // console.log(emojis[Math.floor(Math.random() * 50)])
    //genrate emoji story
    generateStoryBtn.addEventListener('click', (event) => {
        event.preventDefault()
        const arrayOfEmojis = []
        for (let i = 0; i < lengthNum.value; i++) {
            arrayOfEmojis[i] = emojis[Math.floor(Math.random() * 50)]
            
        }
        displayStory.innerHTML = arrayOfEmojis.join('')
        
    }) 
        inputBtn.addEventListener('click', () => {
           let newListItem = document.createElement('li')
           newListItem.textContent = displayStory.innerHTML + input.value
           ul.appendChild(newListItem)
        //    document.querySelector("#emoji-story").reset('')
        //    document.querySelector("#story-length-input").reset('')
        //    document.querySelector('description-input').reset('')
       document
    })
    

})
