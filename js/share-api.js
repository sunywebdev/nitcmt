        const share = e => {
            if (navigator.share) {
                navigator
                    .share({
                        title: "Automated Online Class Schedule",
                        url: "https://nitcmt.tk"
                    })
                    .then(() => console.log("Thanks for sharing my card"))
                    .catch(error => console.log("error", error));
            }
        };
        if (!navigator.share) {
            document.getElementById('share').className = 'hide'
        }
        document.getElementById("share").addEventListener("click", share);
