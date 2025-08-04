import "../styles.css";

const Navbar = () => {
  return (
    <div className="flex flex-row bg-gray-500 gap-50 justify-between h-100 p-2 ">
      <div className="flex flex-row gap-3 p-2  bg-gray-500 ">
        <h4 className="text-white text-xl"> CoinMarketcap </h4>
        <h4 className="text-white text-xl"> Cryptocurrencies </h4>
        <h4 className="text-white text-xl"> DexScan </h4>
        <h4 className="text-white text-xl"> Eschange commujnity</h4>
        <h4 className="text-white text-xl">commujnity </h4>
        <h4 className="text-white text-xl"> Products</h4>
      </div>

      <div className="flex flex-row gap-3  ">
        <h4> portfolio</h4>
        <h4 className="flex flex-row ">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX////t7e0AAADs7Ozv7+8FBQX8/Pzp6emFhYUICAjy8vL5+fn09PSBgYHm5uZ+fn7d3d3R0dFhYWEzMzOkpKSRkZHLy8u3t7dERERaWlq+vr5PT08ODg5sbGw7Ozt1dXWdnZ0gICAnJyckJCQYGBiUlJStra08PDzCwsKfn59wcHDOzs40NDRJSUlcXFzZTXIBAAANVklEQVR4nO2di3riKhCACRAwgWK0Vm3VXuzqunu6+/6PdxjiLRcjScjFrnO2++0pJvAHMgzMMCJ6FE8LQUkh8MubLTWC7oRdt/JOeCe8E3bfyjvhnfBfIPQSkvvpmy717oQ3X/ovEJKE8NSn+c2Xpvl70iyXpWnpx9ByWXonvP3Sf5Swx4ZY+dI74e2X3glvvzSX8Ch90Yf32eJO2Id2tEfYz/VBrbUFqXFxuVLWCTBpcY3PBNOQrIE7F5W2uIvBAG7yNHyaCPjXNyREAvExBnnd6a78joQIvWHs+z7GH6M2+/C0OXzx065KJziWAD+GrI16jbRIGC6wf0CctlJv24QzvAwMoB/g4Tck9OQKBzGhBv3ptVFvy4TqFceAGJTNNGyN0EtIMzqNhlTqQRrsX0NAHOhiSmrf+XppO7MFJZpwddAzsSBKQv6NCIlkpvMOnYjxiB2G73cg1NYxezl1n5n1B4i3RNjG2oIrjgYA5uNjTy4o4bz2nW3WFo3dOlnK1zglo1bqzUoz5iJDozSgHqaC1b/z9dK2CN8yhF8t1NseIWKZQYqDEfo+fcjQNDkZGnUz6ZDQtTHFtCYN0l2IvzLvYSNGXDuE4me2DwOsmq63RcIRAGU68f37EJrpPt2HPn4W34aQ/c1oUiD8jDojPEp9ncZiTZodpb4epltdxlgj9bZHiGAk/tI86VEKjPMG622PEDaCl5m5Yi+m9OYJBVJacQbZGV//ZoLaJ2zCxt/AW5gdpVqG6PAe3q7vyYs4XeQPUZCIR83Ue5Km1/iE0ii3+2LZCskbqfckje9ihOz9MiB+RqG8cULqsXkB4Q9Fbp5Qqh8FhHgmwqYJT5vDl1tZrVS/8ZQS9itfjRrx8W+mb5DVFm6MuHjPu2FCKp6LuhCvQ3njhIIU8Wnze4dunBDcopdHqbZ03m6ecFVEqPvwT9g0YVLxuNRpXkhJGH0WEuqfHQOF5LDe9mYLSjlFM1zch762TfUDz+3D3hMqPUpRsSY1Ai+KKnXnvhASGnoJn1rue+jjqaCkScLm1haKK/SSu7pPIII7WKUJb8T3pFd+w+uDFM89/cmb9D3ptS15tSDEkdt6WyRE6D8bQPzUaJhbg4QI5fjU8uTLeb3tET5aES4j1jahKyNuVqhHT7Jpfc/bTU0Mbaz4fLwQt0mI5JdVH/qB1qa3SZjnU8vvxM2NEg4sX0OMV20THoWcXO1MizbEuEdDkDyDiBwq8bxQhlQsikzSsy708Y8oJFTGdZubpO8MYuqlHtHGoGlM3KycNpckZOK89LiuJDn3MnzHT8iRHaAZpjMI5DutWmlOq451O54PBTqPmOC6mrPA0My1R35CRfH+xTlfAH42RU8MmTufnhvsCJxZnqw+YVJY7jUX5CPHL5o/SvWDKHPjcm1OS3rpISaDhyHIA8jvt7f9v4wMkpL8/6dTqJ4F4mpQJKcqdWPe3vb/MM0aqCsLwMvFDLyXRT6HvshKFp2oKvA9gbbaQlCIrcrvRAL931AkCK13MTRhtOwa4Jr4ZpfgBV0OICvapwFtmHFO90x88+e5ch8uML6yz9K5GG32mFDy1r4nfRF4/vpNGCvrx2wfnhkPFwmR2Ufq+TCNCV+z76ENoTCxTNhyTutUng4RHSX7kAm5MsFZ/RYffyV3W60JYcKX/e8/LZEo7MPLswVIOIw1cg+Hqu/HVuG42CNwzW8Rsu1HjNg1UEaWcZMGoaxFSAQaPYNG7R+hCZVbvyBVz/fE9UoWPSz7OCeCBhyHjOb7j88Ii5ceSilO5MvV6rqRJwZNduJ7Em9mJd6XnvTNcdtFVNjmS5K3XtZzv9DrqMO73b0Yx+qAHywZB7sYMNtMC2Io2xYwtre2KTZsCM10KuhD12BnsoqQcEvIRLzi74lsBEInO8ah7ymOUevqbTRzMuiYdRQfAbBqsz2hgH1muTH6phsjzhhpwX6E2p8Ks+9DGKgemz7GmqwLQvNkf0yQB11ofaLInhDGPaGCDrsapz7sqz2PGAmFuLDkrUXI4MF5hLBjEpbWCfXPg5SKqljx1SG8qJfAbRGK6Dk2xVvsSngxlvhxiiS4n0q1uRwh98A3IuTg+FDbkaVRpOMIVgJZQ9QpYexekmj6o9U9Kh9cPBMpyeVgVEeEyiDqPygqjIx1j4j/jJD0KE951yoQXgnGU5wTTnQlUj61x6dlRYSnxydIyTC/GrGJ0XPemTT3Ei/lzyfAds49SYZgs7Fx6wYqmKvEZlo7EbQCNhvZ7OLZSXeEeikPe02tE5rgDI6i5leNry+CmtraJoQYDU4EaVrh6EkQIvlF1UQo9c49cc+TaDfHwdL1prFZKIGK2SAmvaqnMa77nq7eS/9eCD4GV7hbjePHXr3XKZPaSuuOEM6MaDNObJeulWrsvR5S3X+EVA4Cq08IViIhVLJo7lqnasCPmQiVyNvzbI9QQfSXtm84E+63qRbazham8pqjtKouTZQSgV7WsX1cW/z45x2i20mtVu11qRNC/bYwMOJcKBwfXBJzrWJk7Va5JPS4J9CTE30Du02/BaKO8tW5IiSScmYbuH4N0ccrE43oiLD62iJRyrXhYRfWfRUQEFFIlJuMfJa+J4tSvdRwgHeQraNW5UjFsxtgNLqMYxzm7GpXHLTuCNnKIeGaZ8MrOiZkKHJq1cxctMoloZadS0A8rrzkbeq8hbA8xWUrH56rjHyOCBmLChN8lJedvWeiHULn3oxB3wjFs+P109qr3yqXhII6XuUHOKrfqsuEFbTWxC0h+GEctMol4cryJJ69zMNeEUZr946aXa8IZyYqzJ3AvYbNEFa04seOQ1DN46rdqv0DqHGxKeWKEuEQ7iQvglNVsVUnqb/GJ/ssNO5lwDxeO9eZg10M4lH0uxHCOZFh7ZyDLvZpiFTrRgjxVPDKrXJISDnLJs13IwNEa+ccdJBzj3NUlBkxJaUmlU8RkoqtcrSrT/aD1H5p6PulZpWpLBg7rRF61gk+DGGJgw0+fmJ9yEgXilUZwhLWnY9/FmQ3bY9QilJHhQf2H9WPQ5lEC/UIk4qnpNaiknLxYvdqBRDeOx+hcIUt+zHOqhiWTaLgdLaA6i1TJZnV1V9IB8EeltZBcQsRXvIftkLI9SCQ/NGuD5d4OYEgHMHQ7tNqywNuOxKUdEiobW4PPE52R00W/5k0+oxJpqz2x4Fwgzzu1cnIV8/3pCgn6MFyhntT8alNE6MtbU426InFDxBRmZyDrfqeGMKFkzj4TP1lgB9nSHLumesU96SJplpaGAAKHkp3vic4LVR8nj2II2MWI5iW4tnNOD8JI2/G33uNcFO+VS4JEYpTJRW00hQ96ZGpPAjRBpEhRMEKNPs0z6CY8Bm+Rbg7Qobo/IiRDwihW1M4VwSKlxz6kFJIXqTmFvEbEeqSUKAIX3kPMR5zFOeY8vau+dBkQjIzh0Xc37aJPrQ24lhR+s44fng5OT8lmLqzQNPHa0F/n6Vb5ZBQP92vy00zy4g/o6I7g2N1DKe1inTVqENCZPJKXEbEEBhz8FbnEoKzfrM8fMlsvrx3SvhU8PSX+HMrEUMFo1SCicN2P4ueE57Xy6pYj1C8Fo2vrxGSqXOQmfcQolSYGheOhLAT3xP1pOQswpk8S3u1of/6hQqSG53fWT+El0DP/UGuVtYr/fNsfoWtckkY6oWTyhukh3QV61kqu9vFOxtjdboAzZQXa+zjMaIdEIJdQsSfvO/iMmbKImK2hDBbCganxfaBl+kbfkTCI9SmVS4J4ZHK0TLXa6h/tWGSJ89IFPWhfh1ViIzCyd4ugKyKEDfniND6C3AJh022PELdCxGjelGXOAZ5Pb255K95HixdwwJx5VUN5Ku+PtT6IZX0xKyFNPFQlnpYZ6WTIN5vTGMylhgQ7fiewFrMe2n8j624du3lUjhIHWRfxi1idmo5W1p5FwNs6U3KpPR9PXcsplXacSxVb3kH4la2SsspIZJ/00tDOCKhH7YUFQkFrAUnH9mXcRldvdY5oR40Ec4uC2YCWlmZ0BhAo3V67GM8vXrtZcKqe94iEecVGJUzDu2uvVY6MA6Ocy09v5DNq/jO8Z53RUJdYcKYhPZsQrtrr96ZQSRn4mV87ITw3KemW/MIOTZZ/a+HNXmeR8/Jl3GdNR6aJkSpPsQrLlKzVmVCbSlQOUjY9JdyPzZJiJLxlu9CLzVyZq1Kd2aMyGQ2nLn1tS59T/JPnOZEv4GvCtGSqQ6ulMJedXzMyKhrXubaJFJlQv3C6ekiWJpzgnCITuWlGa9OSKkI33/s0ylsmZ0R75LQZGnamTia9RYJEsqSqQ6uebUkDLCRSWo036IOCBm4yYRQ010kBRy0DMM6fswMoVQkVFzIaKcrYCy52GzH9wQ1cv2odedBYj6uMt8sVusLjij3VKjXaERIab7Ri9lfm1pbuGxWL0vTUks99LL0Tnj7pf8oYSVTq6+ld8LbL70T3n5pLuFR+qIP77PFnbAP7WiPsJ/rg27PPfW81MG5p56XNvqt1b0ovRP2o5X1CE+bwxc/fbOlRu6EnbfyTngnvBN238o74Z3wHyD8H/V7QwNCSw72AAAAAElFTkSuQmCC"
            alt=""
            className="h-4 w-4 "
          />
          watchlist
        </h4>
      </div>

      <div className="">
        <label className=""> Search here </label>
        <input
          type="text"
          placeholder="Search.."
          className="border-1 h-5 w-30 p-2 "
        />
      </div>

      <div>
        <button className="bg-blue-500 h-10 rounded p-2 m-1 text-white  w-15 cursor-pointer ">
          {" "}
          Login{" "}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
