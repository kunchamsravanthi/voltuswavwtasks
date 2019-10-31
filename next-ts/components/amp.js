export default () => (
    <>
        <h3>This is an AMP page</h3>
        <a href='/'>View non-AMP</a>
        <div style={{ maxWidth: 500 }}>
            {/* <amp-img src='/static/log.png'
          layout='responsive'
          alt='a penguin' width={500}
          height={500}
        /> */}
            <amp-img src="/static/logo.png"
                width="1080"
                height="610"
                layout="responsive"
                alt="AMP"></amp-img>
        </div>
        <amp-timeago width="0" height="15" datetime={date.toJSON()} layout="responsive">
      </amp-timeago>
    </>
)