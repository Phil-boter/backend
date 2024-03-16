export class Badge {
    logo: string;
    color: string;
    label: string;

    constructor(
        logo: string,
        color: string,
        label: string
    ) {
        this.logo = logo;
        this.color = color;
        this.label = label;
    }
    
    public get badgeLogo() {
        return this.logo;
    }

    public set badgeLogo(logo: string) {
        this.logo = logo;
    }
    public get badgeColor() {
        return this.color;
    }

    public set badgeColor(color: string) {
        this.color = color;
    }
    public get badgeLabel() {
        return this.label;
    }

    public set badgeLabel(label: string) {
        this.label = label;
    }

}