from PIL import Image
from sklearn.cluster import KMeans
import numpy as np
import sys
import os


def get_dominant_colors(image_path, k=4, brightness_factor=2):
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
    # return list(sorted_colors[:2]), list(sorted_colors[-2:])
    amplified_colors = []
    for color in sorted_colors[:2] + sorted_colors[-2:]:
        # Clamp color values to 0-255 to avoid overflow during amplification
        amplified_color = [min(int(c * brightness_factor), 255) for c in color]
        amplified_colors.append(amplified_color)
        # print(sorted_colors)
    hex_colors = []
    for color in amplified_colors:
        # Format each color as a zero-padded hex string (e.g., #FF0000)
        hex_color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
        hex_colors.append(hex_color)

    return hex_colors


def write_colors_to_file(colors, filename):
    """
    Writes each color as a separate RGB value to a text file.

    Args:
        colors: List of RGB tuples representing colors.
        filename: Name of the output text file.
    """
    with open(filename, "w") as file:
        for color in colors:
            file.write(f"{color}\n")


if __name__ == "__main__":
    wallpaper_path = sys.argv[1]
    colors = get_dominant_colors(wallpaper_path)
    print("Extracted accent colors:")
    write_colors_to_file(colors, 'colors')
    print(colors)
    # qr = 'hyprctl --batch "keyword general:col.inactive_border  rgba('+str(colors[0])[1:]+'ff)  rgba('+str(colors[1])[1:]+'ff)  90deg ;keyword general:col.active_border  rgba('+str(colors[2])[1:]+'ff)  rgba('+str(colors[3])[1:]+'ff)  90deg ;"'
    qr = f'hyprctl --batch "keyword general:col.inactive_border rgba({str(colors[0])[1:]}ff) rgba({str(colors[1])[1:]}ff) 90deg ;keyword general:col.active_border rgba({str(colors[2])[1:]}ff) rgba({str(colors[3])[1:]}ff) 90deg ;"'
    # setwall = 'hyprctl --batch" hyprpaper preload '~/.config/wallpaper+wallpaper_path/' ;hyprpaper wallpaper 'eDP-1,~/.config/wallpaper/+wallpaper_path'"'
    loadwall = f'hyprctl hyprpaper preload ~/.config/wallpaper/{wallpaper_path}'
    setwall = f'hyprctl hyprpaper wallpaper eDP-1,~/.config/wallpaper/{wallpaper_path}'
    os.system(qr)
    os.system(loadwall)
    os.system(setwall)
    print(qr)
    print(loadwall)
    print(setwall)
