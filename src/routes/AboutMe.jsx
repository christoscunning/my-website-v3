

export default function AboutMe() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Content goes here */}
                <p className="boxed-text">
                    I recently recieved my bachelors in Computer Engineering from
                    McGill University in Montreal, Quebec, Canada, and I am currently seeking a Summer or
                    Fall 2021 Internship. Some of the highlights from my degree include learning about{" "}
                    <a href="https://www.mcgill.ca/study/2023-2024/courses/comp-424">
                        AI
                    </a>
                    {" & "}
                    <a href="https://www.mcgill.ca/study/2023-2024/courses/comp-551">
                        Machine Learning
                    </a>
                    ,{" "}
                    <a href="https://www.mcgill.ca/study/2020-2021/courses/comp-251">
                        Algorithms and Data Structures
                    </a>{" "}
                    and{" "}
                    <a href="https://www.mcgill.ca/study/2023-2024/courses/ecse-421">
                        Embedded Systems
                    </a>
                    .
                    
                    Some cool projects I worked on include developing an AI agent to play the game {" "}
                    <a href="https://github.com/christoscunning/COMP424-Project">
                        Colosseum Survival
                    </a>
                    {" "}as well as developing full stack web application that could be used for {" "}
                    <a href="https://github.com/McGill-ECSE321-Fall2021/project-group-09">
                        managing public libraries
                    </a>
                    .

                    {/* I believe that learning is a continual, iterative process, and to
                    excel one must always be ready to try, fail, (hopefully learn
                    something!), and try again. */}
                </p>
                <p className="boxed-text">
                    Aside from my technical experience, I am a driven, outgoing person, and some 
                    of the best moments from my time at McGill were thanks to getting involved in 
                    groups such as student government.

                    During my last year, I was a member of the Engineering Social Committee (ESC), where 
                    I was in charge of handling the logistics of running our many events throughout the school year.
                    The highlight of ESC was hosting our 'Love Fest' Valentines Day party in collaboration
                    with the Nursing Undergradute Society.

                    Additionally, from November 2018 to November 2019, I served as a Member at Large on the{" "}
                    <a href="https://wiki.mcgilleus.ca/Board_of_Governors">
                        McGill EUS Board of Governors
                    </a>
                    .
                </p>
                {/* <p className="boxed-text">
                    Opportunities to work with groups such as the EUS are exciting to me
                    because I have experienced the value that the EUS can bring to the lives
                    of its members here at McGill, and I want to be apart of this. I have
                    also begun to foster a interest in the governance aspect of the society
                    after sitting on the Board of Governors as a Memeber at Large. Getting
                    involved in the EUS has offered me the opportunity to collaborate with
                    all the awesome people who do amazing for the EUS and it's members.
                    These opportunities have been valuable for personal growth as well. For
                    example, conflict inevitably arises when working with others and this
                    has taught me that strong communication skills are necessary for
                    effective collaboration.
                </p> */}
                {/* <p className="boxed-text">
                        My past work experience includes 8 months at Starbucks Coffee Shop over
                        the Summer of 2020 as a Barista. I had the opportunity there to work as
                        part of a large team and to train new members of that team. In past I
                        have also worked various summer jobs at resturants and similar. Before
                        that I worked for just shy of two years at Choices Markets, a BC owned
                        and operated grocery store where I had the opportunity to interact and
                        provide customer service to customers as well as organize and stock the
                        store.
                    </p> */}
                <p className="boxed-text">
                    Outside of work and school, my interests and hobbies range from sports
                    to music to gaming. I am an avid hockey and ultimate frisbee player, and I was
                    captain of the McGill Ultimate Mens B team for the 2021 and 2022 seasons.

                    I enjoy playing the piano and recieved many years of classical training. I also
                    had opportunity to play keyboard in a band (Red Shift) for a while.

                    Some of my
                    other interests include video games and role-playing games, especially
                    Civilization and D&amp;D.
                </p>

                <h3>More coming soon...</h3>
            </div>
        </>
    );
}