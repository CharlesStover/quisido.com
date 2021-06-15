import Box from '@awsui/components-react/box';
import Link from '../components/link';
import charlesStover from '../images/charles-stover.jpg';
import mattMcclelland from '../images/matt-mcclelland.jpg';
import Quote from '../types/quote';

const QUOTES: Quote[] = [
  {
    author: 'Matt McClelland',
    image: mattMcclelland,
    quote: (
      <>
        <Box variant="p">
          Ace is an innovative, detail-oriented, and multi-talented artist. Over
          the past year, I have had the pleasure of working with them on a
          number of projects. From <Link to="/miniatures">painting models</Link>{' '}
          and{' '}
          <Link to="https://acealters.com">
            altering popular <abbr title="Magic: the Gathering">MTG</abbr> cards
          </Link>{' '}
          to creating <Link to="/fabrication">custom wooden deck boxes</Link>,
          they have proven time and again to be extraordinarily versatile in
          their artistic abilities. And that&apos;s just the tip of the iceberg
          when it comes to what they are capable of.
        </Box>
        <Box variant="p">
          They are very receptive to feedback and insightful with their own.
          Their attention to detail is exceptional and her ability to give each
          project they work on a unique accent and distinction is truly
          remarkable.
        </Box>
        <Box variant="p">
          They are a trusted and capable individual who would benefit a wide
          range of businesses with their broad skill set and will continue to be
          my go-to creative for any future artistic needs.
        </Box>
      </>
    ),
  },

  {
    author: 'Charles Stover',
    image: charlesStover,
    quote: (
      <Box variant="p">
        I have hired Ace on multiple occasions over the last few years to alter
        and extend existing artwork. Each time, they exceeded my expectations
        with their outstanding attention to detail and vivid imagery. With very
        little instruction, they were able to envision, design, and finish each
        project with better results than I could have hoped. They will remain my
        go-to artist for a long time to come.
      </Box>
    ),
  },
];

export default QUOTES;