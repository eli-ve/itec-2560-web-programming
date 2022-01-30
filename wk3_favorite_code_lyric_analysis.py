"""
"Murmaider" - Dethklok
Produced by Ulrich Wild & Brendon Small
Album The Dethalbum
https://genius.com/Dethklok-murmaider-lyrics

Dethklok is a fictional death metal band from the animated show "Metalocalypse".
"""

song_lyrics = """
There are no fingerprints deep under water
Nothing to tie one to a crime
And if you seek vengeance
All you need are instruments of pain

You need your:
Knives? Check
Rope? Check
Dagger? Check
Chains? Check
Rocks? Check
Laser Beams? Check
Acid? Check
Body Bag? Check

Murmaider murmaider murmaider murmaider
Murmaider murmaider murmaider murmaider
Murmaider murmaider murmaider murmaider
Murmaider murmaider murmaider murmaider

But beware!
For when you quench your blood thirst
Others will seek their vengeance on you
And they won't rest until you're dead

They'll have their:
Shiv? Check
Pipe? Check
Hammer? Check
Axe? Check
Subject? Check
Location? Check
Desire? Check
Vengeance? Check

Hold your breath, swim and strain
Smell the deth, can't escape
Blood will cloud and drift away
Attract the murders of mermaids
It's so cold, they all know
What you've done, you can't run
Vengeance is the law for thee
A thousand leagues below the sea

You've been tracked, you've been seen
Murdering the next of kin
Ate their hearts, drank their blood
Washed your fins in blackened mud
Try to swim, try to hide
Heart beats faster from inside
Thought it was a big charade
Your life is ended by mermaids

Murmaider murmaider murmaider murmaider
Murmaider murmaider murmaider murmaider
Murmaider murmaider murmaider murmaider
Murmaider murmaider murmaider murmaider

Swords? Check
Saws? Check
Clubs? Check
Claws? Check
Hatred? Check
Anger? Check
Mermaid? Check
Murder? Check

Murder! Murder, mermaid murder!
Murder! Murder, mermaid murder!
Murder! Murder, mermaid murder!
Murder! Murder, mermaid murder!

You've been tracked, you've been seen
Murdering the next of kin
Ate their hearts, drank their blood
Washed your fins in blackened mud
Try to swim, try to hide
Heart beats faster from inside
Thought it was a big charade
Your life is ended by mermaids

Your life was ended by mermaids
Your life was ended by mermaids
"""

""" Part 1: Choose a song, save as lowercase (2 points) """

song_lyrics = song_lyrics.lower()

"""
Part 2: Replacing characters that aren't part of words (4 points)
Use replace to replace ! ( ) , . and other punctuation characters in your song with spaces.
"""

to_remove = ['\'', ',', ':', '!', '?']

for symbol_char in to_remove:
    song_lyrics = song_lyrics.replace(symbol_char, '')

"""
Part 3: How many lines, how many words?  3 points)
Use split() to break your (lowercase, punctuation-free) song into words. How many words does your song have?
Use split() to break your song into lines. What escape character do you need to use?
How many lines does your song have?
"""

song_lyrics_words = song_lyrics.split()

print(f'There are {len(song_lyrics_words)} words in this song.')  # 303

# gives the total number of new lines, including blank lines and those from putting the """s on separate lines
song_lyrics_total_lines = song_lyrics.split('\n')  # 85

# to count only the lines which actually contain words - there are 13 blank lines in total
song_lyrics_lines = 0
for line in song_lyrics_total_lines:
    if line != '':
        song_lyrics_lines = song_lyrics_lines + 1

print(f'There are {song_lyrics_lines} lines of lyrics in this song.')  # 72

"""
Part 4: Word Frequency (7 points)
> How many times does each word appear in your song?
> Start with your list of words in your song.
> Create a dictionary of words, and how many times they appear in the song.
> How many unique words are in your song?  Print the number of unique words.
"""

# this section is from your coverage of the lab during the 3/31 zoom class session
word_counts = {}

for word in song_lyrics_words:
    if word in word_counts:
        word_counts[word] = word_counts[word] + 1
    else:
        word_counts[word] = 1

print(f'There are {len(word_counts)} unique words in this song.')  # 129

"""
Part 5: Table, alignment (4 points)
> Display your word frequency counts in a table. Use string formatting and alignment to space your data into a table
    with neatly aligned columns.
> If you have words with upper and lowercase forms, or words with punctuation in, revisit part 1 and 3 and make sure you
    lowercase your lyrics and remove all punctuation.
"""

# adapted from t-shirt sales dictionaries lab
print()
print(f'{"Word":<14}Count')

# I got this number by trial and error - I can't remember if you went over a more efficient way of doing this?
print('-' * 19)

for word, count in word_counts.items():
    print(f'{word:<14}-- {count:<5}')

"""
(Extra credit challenge) Part 6: Sorting by frequency (bonus +2 points)
> Sort the data with the most frequently used words first. Display your sorted data in a table,
    with most frequently used word first.
"""

# this code is modified from https://stackabuse.com/how-to-sort-dictionary-by-value-in-python/
sorted_counts = {}  # new dictionary with sorted pairs

# sorts word_counts dict by values, with corresponding keys added before - then reverses to sort high to low
sorted_keys = reversed(sorted(word_counts, key=word_counts.get))

# stores reverse-sorted key-value pairs in new dictionary
for word in sorted_keys:
    sorted_counts[word] = word_counts[word]

print()
print(f'{"Word":<14}Count')
print('-' * 19)

for word, count in sorted_counts.items():
    print(f'{word:<14}-- {count:<5}')
