import React from "react";
import jsonData from "../data.json";

export function MainBody() {
  return (
    <div className="content">
      <h3>Lipsum Text</h3>
      <p>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
        treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
        since the 1500s is reproduced below for those interested. Sections
        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
        also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham.
      </p>
      <p className="body-image">
        {jsonData &&
          jsonData.map((data, i) => (
            <img key={i} src={data} alt={`theme-${i}`} />
          ))}
      </p>
      <p>Lipsum dummy Text</p>
        <p>
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in 45 BC.       
        </p>
        <p>This book is a
        treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
        since the 1500s is reproduced below for those interested. Sections
        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
        also reproduced in their exact original form, accompanied by English
        versions from the 1914 translation by H. Rackham.
        </p>
        <p className="cover">
        <span>Where does it come from?</span>
        <div className="para-image">
        <img
          src="https://i.picsum.photos/id/1073/5472/3648.jpg?hmac=xCDetU9pLnLGZopbvHOQOkQRhTiYwyrzWc0YyHPzp5Y"
          alt="i-theme"
        />
        </div>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. 
      </p>
      <p>
      The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham. "On the other hand, we denounce with
        righteous indignation and dislike men who are so beguiled and
        demoralized by the charms of pleasure of the moment, so blinded by
        desire, that they cannot foresee the pain and trouble that are bound to
        ensue; and equal blame belongs to those who fail in their duty through
        weakness of will, which is the same as saying through shrinking from
        toil and pain. These cases are perfectly simple and easy to distinguish.
      </p>
      <p>
      In a free hour, when our power of choice is untrammelled and when
        nothing prevents our being able to do what we like best, every pleasure
        is to be welcomed and every pain avoided. But in certain circumstances
        and owing to the claims of duty or the obligations of business it will
        frequently occur that pleasures have to be repudiated and annoyances
        accepted. The wise man therefore always holds in these matters to this
        principle of selection: he rejects pleasures to secure other greater
        pleasures, or else he endures pains to avoid worse pains."
      </p>
    </div>
  );
}
