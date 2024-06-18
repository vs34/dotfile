from PIL import Image
from sklearn.cluster import KMeans
import numpy as np
import sys


def get_dominant_colors(image_path, k=4):
    """
    Analyzes an image and returns a list of k dominant colors.

    Args:
        image_path: Path to the image file.
        k: Number of dominant colors to extract (default: 4).

    Returns:
        A list of RGB tuples representing the dominant colors.
    """
    image = Image.open(image_path).convert("RGB")
    # Reduce image size for faster processing
    resized_image = image.resize((200, 200))
    pixels = list(resized_image.getdata())

    # Convert pixel data to NumPy array for KMeans clustering
    pixels = np.array(pixels)

    # Use KMeans clustering to group similar colors
    kmeans = KMeans(n_clusters=k, random_state=0)
    kmeans.fit(pixels)

    # Get cluster centroids as dominant colors
    dominant_colors = kmeans.cluster_centers_.astype(int)
    luminosities = [0.2126 * color[0] + 0.7152 * color[1] +
                    0.0722 * color[2] for color in dominant_colors]
    # Separate light and dark colors based on average luminosity

    # Sort colors and dominant colors together based on luminosity (ascending)
    sorted_data = sorted(zip(luminosities, dominant_colors))
    sorted_luminosities, sorted_colors = zip(*sorted_data)

    # Select the top 2 lightest and 2 darkest colors
    return list(sorted_colors[:2]), list(sorted_colors[-2:])


def write_colors_to_file(colors, filename):
    """
    Writes each color as a separate RGB value to a text file.

    Args:
        colors: List of RGB tuples representing colors.
        filename: Name of the output text file.
    """
    with open(filename, "w") as file:
        for color in colors:
            file.write(f"{color[0]}, {color[1]}, {color[2]}\n")


if __name__ == "__main__":
    wallpaper_path = sys.argv[1]
    light_colors, dark_colors = get_dominant_colors(wallpaper_path)
    print("Extracted accent colors:")
    write_colors_to_file(dark_colors+light_colors, 'colors')
    print(light_colors, dark_colors)
    light_colors, dark_colors = light_colors[0:2], dark_colors[0:2]
